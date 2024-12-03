#!/bin/bash

./generate-pdf.sh
while fswatch -1 resume.md resume-stylesheet.css generate-pdf.js; do
    ./generate-pdf.sh
done
