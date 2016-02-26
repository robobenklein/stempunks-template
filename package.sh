#!/bin/bash
# Zip the package

rm STEMpunksTemplate.zip
zip -r STEMpunksTemplate.zip css images resources index.html index.php js language less README.md LICENSE.txt templateDetails.xml component.php

packagesize=$(ls -lh STEMpunksTemplate.zip)
echo "Created: $packagesize"
