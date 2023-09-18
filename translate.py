from googletrans import Translator, LANGUAGES

translator = Translator()

opt = int(input("1. Detect Language   2. Translate, Enter your choice: "))
if opt == 1:
    text = str(input("Enter your sentence: "))
    lang = LANGUAGES[translator.detect(text).lang]
    print("This sentence is in: ", lang)
elif opt == 2:
    text = str(input("Enter text to be translated: "))
    code = str(input("Enter the preferred langauge code: "))
    try:
        ans = translator.translate(text=text, dest=code)
        print("This sentence translates to: ", ans.text)
    except:
        print("An error occurred.")
else:
    print("Invalid choice.")