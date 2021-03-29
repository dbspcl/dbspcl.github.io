#!/bin/bash
echo $1 $2 $3 $4 $5
sed "s/<chapter-image-name>/$2/g" template.html > junk
sed "s/<linebreak-image-name>/$3/g" junk > chapter$1.html
cat chapter$1-content.html >> chapter$1.html
sed "s/<previous-chapter>/$4/g" template-c.html > junk
sed "s/<next-chapter>/$5/g" junk >> chapter$1.html