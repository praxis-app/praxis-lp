# Repository guidelines

## Project overview

- Praxis LP is the landing page for the Praxis project. It is built with Next.js and Tailwind CSS.

## Required verifications

- After every substaintial code change, run `npm run check` before signaling that the work is ready for review.
- The command sequences `npm run types`, `npm run lint`, and `npm audit`; a clean run is required for any review or merge request.
- Fix failing steps locally and rerun `npm run check` until the entire chain succeeds; partial or skipped checks are not acceptable sign-off.

## Git command restrictions

- Do not run git commands that stage, commit, amend, stash, or rewrite history (`git add`, `git commit`, `git reset`, etc.); human maintainers own all source-control actions.
- Restrict yourself to read-only inspection commands such as `git status` or `git diff` when additional context is needed for editing.
