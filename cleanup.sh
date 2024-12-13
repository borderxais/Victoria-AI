#!/bin/bash

# Move UI components
mv src/components/ui/* src/components/shared/ui/

# Move layout components
mv src/components/layout/* src/components/shared/layout/

# Move demo components
mv src/components/demo/* src/components/dashboard/core/

# Clean up empty directories
rm -rf src/components/ui
rm -rf src/components/layout
rm -rf src/components/demo
rm -rf src/components/cta
rm -rf src/components/features
rm -rf src/components/success
