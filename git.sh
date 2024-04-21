#!/usr/bin/env bash
branch=$(git branch --show-current)
git add . && git commit -m "$1" && git git push origin $branch
