#!/bin/sh

# Generate HTML first
pandoc resume.md -f markdown -t html -c resume-stylesheet.css -s -o resume.html
# Use weasyprint to convert HTML to PDF
node generate-pdf.js
# Copy resume.pdf to static directory
cp resume.pdf ../static/
