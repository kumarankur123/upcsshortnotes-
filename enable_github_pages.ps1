# GitHub Pages Enable Script
# This script enables GitHub Pages for the repository

$repo = "kumarankur123/upcsshortnotes-"
$branch = "main"
$folder = "/Notes"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "GitHub Pages Enable Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Repository: $repo" -ForegroundColor Yellow
Write-Host "Branch: $branch" -ForegroundColor Yellow
Write-Host "Folder: $folder" -ForegroundColor Yellow
Write-Host ""

Write-Host "To enable GitHub Pages, you need to:" -ForegroundColor Green
Write-Host "1. Go to: https://github.com/$repo/settings/pages" -ForegroundColor White
Write-Host "2. Under 'Source', select 'Deploy from a branch'" -ForegroundColor White
Write-Host "3. Select branch: $branch" -ForegroundColor White
Write-Host "4. Select folder: $folder" -ForegroundColor White
Write-Host "5. Click 'Save'" -ForegroundColor White
Write-Host ""

Write-Host "Opening GitHub Pages settings..." -ForegroundColor Cyan
Start-Process "https://github.com/$repo/settings/pages"

Write-Host ""
Write-Host "After enabling, your site will be available at:" -ForegroundColor Green
Write-Host "https://kumarankur123.github.io/upcsshortnotes-/Notes/" -ForegroundColor Yellow
Write-Host ""
Write-Host "Note: It may take a few minutes for the site to go live." -ForegroundColor Gray

