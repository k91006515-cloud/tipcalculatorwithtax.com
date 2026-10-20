@echo off
cd /d C:\Users\k9100\OneDrive\Desktop\simpletipcalculator.com
npx astro preview --port 4321 > preview.log 2>&1
timeout /t 5 /nobreak >nul
python -c "import urllib.request; r = urllib.request.urlopen('http://localhost:4321/nonexistent-page-xyz'); print('404 Status:', r.status)"