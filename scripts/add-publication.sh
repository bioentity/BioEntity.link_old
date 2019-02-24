#!/bin/bash

echo "adding publication" ;

#http://localhost:8080/publication/ingestFile

#xmlFile: (unable to decode value)
#fileName: elife-20023-v1.xml


#curl \
#-i \
#-X POST \
#-H "Content-Type: multipart/form-data"  \
#-F "fileName=15278.xml" \
#-F "xmlFile=@/Users/nathandunn/repositories/dmc/scripts/15278.xml" \
#http://localhost:8080/publication/ingestFile


#curl \
#-X POST \
#-H "Content-Type: text/xml"  \
#-F "fileName=15278.xml" \
#-F "xmlFile=@/Users/nathandunn/repositories/dmc/scripts/15278.xml" \
#http://localhost:8080/publication/ingestFile


#curl \
#-i \
#-X POST \
#-H "Content-Type: application/x-www-form-urlencoded	"  \
#-F "fileName=15278.xml" \
#-F "xmlFile=@/Users/nathandunn/repositories/dmc/scripts/15278.xml" \
#http://localhost:8080/publication/ingestFile

#curl \
#-X POST \
#-H "Accept: application/json, text/plain, */*"  \
#-H "Content-Type: multipart/form-data"  \
#-F "fileName=15278.xml" \
#-F "xmlFile=@/Users/nathandunn/repositories/dmc/scripts/15278.xml" \
#http://localhost:8080/publication/ingestFile

curl \
-X POST \
-F "fileName=15278.xml" \
-F "xmlFile=@/Users/nathandunn/repositories/dmc/scripts/15278.xml" \
http://localhost:8080/publication/ingestFile

#curl \
#-X POST \
#-F "xmlFile=@/Users/nathandunn/repositories/dmc/scripts/15278.xml" \
#http://localhost:8080/publication/uploadFile

#--data-urlencode "xmlFile=@/Users/nathandunn/repositories/dmc/scripts/15278.xml" \
#curl \
#-F "fileName=15278.xml;xmlFile=@/Users/nathandunn/repositories/dmc/scripts/15278.xml" \
#http://localhost:8080/publication/ingestFile

#wget --header="Content-type: multipart/form-data boundary=FILEUPLOAD" --post-file /Users/nathandunn/repositories/dmc/scripts/15278.xml http://localhost:8080/publication/ingestFile

#curl \
#-F "fileName=15278.xml" \
#-F "file=@/Users/nathandunn/repositories/dmc/scripts/15278.xml;filename=xmlFile" \
#http://localhost:8080/publication/ingestFile
