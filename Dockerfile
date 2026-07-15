# syntax=docker/dockerfile:1.7

FROM oven/bun:1.2-alpine AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM oven/bun:1.2-alpine AS build
WORKDIR /app
ENV NITRO_PRESET=node-server
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8118
ENV HOST=0.0.0.0
COPY --from=build /app/.output ./.output
EXPOSE 8118
CMD ["node", ".output/server/index.mjs"]
