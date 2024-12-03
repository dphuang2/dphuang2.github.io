#!/bin/bash

while fswatch -1 resume.md resume-stylesheet.css; do
    ./generate-pdf.sh
done
