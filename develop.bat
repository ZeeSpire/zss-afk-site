call bundle clean --force
call bundle install
set JEKYLL_ENV=development
jekyll serve --watch