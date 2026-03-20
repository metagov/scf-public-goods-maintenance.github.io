<!-- SPDX-License-Identifier: CC-BY-4.0 -->

# SCF Public Goods Maintenance

Project documentation for SCF Public Goods Maintenance process and tooling.

Browse the documentation here: <https://scf-public-goods-maintenance.github.io/>

## Contributor Setup: Automated Formatting & Linting

To maintain a consistent line length of 101 characters across all documentation, we use `pre-commit`
to automate the "folding" of Markdown files.

### 1. Install pre-commit

You only need to do this once on your machine:

- **macOS/Linux (Homebrew):** `brew install pre-commit`
- **Any OS (Python/Pip):** `pip install pre-commit`

### 2. Activate Hooks

Run this command in the project root to link the hooks to your local Git:

```sh
pre-commit install
```

### 3. Usage

Automatic: When you run git commit, the hooks will automatically fold any long lines. If changes are
made, simply git add the file again and commit.

**Manual Check:** To check all files without committing, run:

```sh
pre-commit run --all-files
```

### Recommended: VS Code Setup

If you use VS Code, install the Prettier and markdownlint extensions. The project's
`.vscode/settings.json` is already configured to fold lines automatically whenever you save.

## Local Pages Build

GitHub automatically builds this project as a Pages sites on pushes to the `main` branch. For smaller
content edits, it's not necessary to preview a local build. This is, however, recommended for larger
changes, especially those that affect the Jekyll config or theme.

1. [Install Jekyll](https://jekyllrb.com/docs/installation/)
1. Local dev preview:

```sh
cd docs/
bundle exec jekyll serve --watch
```

## License

**[CC-BY 4.0](LICENSE)**

This hub is a public good. You are free to copy, remix, and share this work — for instance on
Discord, Notion, or in your own docs. Our only "bond" is attribution: always (deep)link back to the
source. It ensures our governance stays transparent and the thread remains connected.

> 🔗 Source:
> [scf-public-goods-maintenance.github.io](https://github.com/SCF-Public-Goods-Maintenance/scf-public-goods-maintenance.github.io/)
