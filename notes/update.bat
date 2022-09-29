@echo off
echo ^<!DOCTYPE html^>                  >  index.html
echo ^<html^>                           >> index.html
echo 	^<head^>                        >> index.html
echo 		^<meta charset="utf-8" /^>  >> index.html
echo 		^<title^>Index^</title^>    >> index.html
echo 	^</head^>                       >> index.html
echo 	^<body^>                        >> index.html
for /r . %%i in (*.html) do (echo 		^<a href="%%~nxi"^>%%~nxi^</a^>^<br /^> >> index.html)
echo 	^</body^>                       >> index.html
echo ^</html^>                          >> index.html