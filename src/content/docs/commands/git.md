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

#### Remove a file or folder from the staging area without deleting it

This command removes the specified file or directory from the staging area, but leaves it in your working directory.

```bash
git rm -r --cached <file_or_folder>
```
