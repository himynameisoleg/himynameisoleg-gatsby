---
tags: [TIL]
title: "Free Up Space with node_modules" 
date: "2020-01-19"
---

# Remove node_modules from a directory

Here is a simple script that checks a directory for node module and prints the total damage done:

```bash
cd directory_to_check 
find . -name "node_modules" -type d -prune | xargs du -chs
```

To remove them use:

```bash
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
```
