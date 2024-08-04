---
title: Configuration
description: Code snippets for configuration files.
---

A collection of configuration files that I use for various libraries and tools.

#### Prettier Configuration

My Prettier configuration file. (`.prettierrc.mjs`)

<details>
<summary>Click to expand</summary>

```js
export default {
    tabWidth: 4,
    bracketSpacing: true,
    singleQuote: false,
    quoteProps: "consistent",
    printWidth: 120,
    semi: true,
};
```

</details>

#### Biome Configuration

My Biome configuration file. (`biome.json`)

<details>
<summary>Click to expand</summary>

```json
{
    "$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
    "organizeImports": {
        "enabled": true
    },
    "linter": {
        "enabled": true,
        "rules": {
            "recommended": true,
            "style": {
                "noNonNullAssertion": "off"
            },
            "correctness": {
                "noUnusedImports": "error"
            },
            "complexity": {
                "noStaticOnlyClass": "off",
                "noThisInStatic": "off"
            }
        }
    },
    "formatter": {
        "enabled": true,
        "formatWithErrors": true,
        "lineEnding": "lf",
        "indentStyle": "space",
        "indentWidth": 4,
        "lineWidth": 120
    },
    "javascript": {
        "formatter": {
            "indentStyle": "space",
            "indentWidth": 4
        }
    },
    "vcs": {
        "enabled": true,
        "clientKind": "git",
        "useIgnoreFile": true,
        "defaultBranch": "master"
    }
}
```

</details>
