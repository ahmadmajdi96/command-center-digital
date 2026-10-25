<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use the shared PageBackground for full-bleed page imagery and global semantic gradient tokens for surfaces; this keeps image visibility and placement consistent across pages.
- Keep theme state in the shared ThemeProvider and express light-mode overrides through global semantic tokens; every page and theme control must share one persisted selection.
