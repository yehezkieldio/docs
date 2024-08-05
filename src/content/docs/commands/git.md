---
title: Git
description: This section serves as a quick reference for my commonly used Docker commands.
---

#### Create a new repository with the GitHub CLI

This command initializes a new repository on GitHub using the GitHub CLI.

```bash
gh repo create repository_name --public --source=. --remote=upstream --description=""
```

#### Clone a repository with submodules

This command clones a repository with submodules.

```bash
git clone --recurse-submodules <repository_url>
```