cd docs/

vuepress build 

cd ..

git pull origin blog

git add -A

git commit -am 'deploy'

git push origin blog 

git subtree push --prefix  docs/blog  origin master