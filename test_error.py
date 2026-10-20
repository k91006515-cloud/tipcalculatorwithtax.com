import urllib.request
import time

time.sleep(2)  # Wait for server to start

try:
    r = urllib.request.urlopen('http://localhost:4321/nonexistent-page-xyz')
    print('404 Status:', r.status)
    print('Content type:', r.headers.get('Content-Type', 'none'))
except urllib.error.HTTPError as e:
    print('404 HTTP Error:', e.code)
    print('404 Body:', e.read().decode()[:200])
except Exception as e:
    print('Connection error:', e)