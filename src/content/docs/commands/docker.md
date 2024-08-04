---
title: Docker
description: This section serves as a quick reference for my commonly used Docker commands.
---

#### Clean Exited Docker Container

This command removes all containers that have exited.

```bash
docker rm -v (docker ps -a -q -f status=exited)
```

#### Show Dangling Docker Image

This command lists all dangling images, which are images not tagged and not referenced by any container.

```bash
docker images -f "dangling=true" -q
```
