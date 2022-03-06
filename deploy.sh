#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m "[deploy]auto"

git push -f git@github.com:chasehu123/vue-blog.git master:gh-pages

cd -