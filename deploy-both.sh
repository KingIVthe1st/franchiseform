#!/bin/bash
# Build for custom domain (base: /)
echo "Building for custom domain..."
npm run build:dark

# Copy to docs/
echo "Deploying to docs/..."
cp -r dist-dark/* docs/

# Add CNAME
echo "intake.franchisemachine.com" > docs/CNAME

# Commit and push
git add -A
git commit -m "Deploy: Custom domain build"
git push origin main

echo "✅ Deployed! Wait 2-3 minutes for GitHub Pages to update."
echo "Custom domain: https://intake.franchisemachine.com/"
