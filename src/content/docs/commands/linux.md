---
title: Linux
description: This section serves as a quick reference for my commonly used Docker commands.
---

#### View the size of a file in MB

Displays the size of a specified file in megabytes.

```bash
stat -c %s file_name.file_extension | awk '{size=$1/1024/1024; printf "%.2f MB\n", size}'
```

#### View the size of a file in MB

Displays the size of a specified file in megabytes.

```bash
du -sh folder_name | awk '{print $1}'
```
