@ECHO OFF

set "path=%cd%"
cd  %path%/node_modules/express-api-skelton/

ren ".env-dem" ".env"

move ".env" "%path%"
move "app.js" "%path%"
move "public" "%path%"
move "src" "%path%"
move ".gitignore" "%path%"
rmdir /s /q "%path%\node_modules\express-api-skelton\" /s /q



EXIT