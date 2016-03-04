#!/bin/bash
# Zip the package

rm STEMpunksTemplate.zip
zip -r STEMpunksTemplate.zip css fa index.html index.php js language less README.md LICENSE.txt stempunkslogo.png logo.webm favicon.ico templateDetails.xml component.php

packagesize=$(ls -lh STEMpunksTemplate.zip)
echo "Created: $packagesize"
