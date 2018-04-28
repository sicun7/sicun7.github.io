cd docs/

vuepress build 

cd ..

git add .

git commit -am 'deploy'

git push origin master 

git subtree push --prefix  docs/vuepress  origin gh-pages