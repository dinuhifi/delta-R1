import requests, json

opt = int(input("1. Translate  2. Detect, choose an option: "))

if opt == 1:
    sentence = input("Enter sentence to translste: ")
    code = input("Enter the language code to which it needs to be translated: ")
    r = requests.get("http://127.0.0.1:5000/translate/"+sentence+"/"+code)
    result = json.loads(r.text)
    print("The translated text is: ", result['translated-text'])

elif opt == 2:
    sentence = input("Enter sentence to detect it's language:")
    r = requests.get("http://127.0.0.1:5000/detect/"+sentence)
    result = json.loads(r.text)
    for i in result:
        print(i+ " : "+result[i])

else:
    print("Invalid operation.")