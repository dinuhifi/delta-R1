import requests

r = requests.get('http://127.0.0.1:5000/translate/హలో/es')

print(r.text)