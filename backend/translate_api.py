from flask import Flask
from googletrans import Translator, LANGUAGES
import json

app = Flask(__name__)

@app.route("/detect/<sentence>")
def detect(sentence):
    try:
        translator = Translator()
        res = translator.detect(sentence)
        code = res.lang
        lang = LANGUAGES[code]
        response = {'Detected-language-code' : code,
                    'language' : lang,
                    'source-text' : sentence.encode("utf-8").decode("utf-8")}
        return json.dumps(response, indent=4, ensure_ascii=False).encode('utf8')
    except:
        return "error"

@app.route("/translate/<sentence>/<code>")
def translate(sentence,code):
    translator = Translator()
    try: 
        res = translator.translate(text=sentence, dest=code)
        text = res.text
        response = {'source-text' : sentence.encode("utf-8").decode("utf-8"),
                    'source-lang-code' : res.src,
                    'source-lang' : LANGUAGES[res.src],
                    'translated-text' : text.encode("utf-8").decode("utf-8"),
                    'translated-text-lang-code' : res.dest,
                    'translated-text-lang' : LANGUAGES[res.dest]}
        return json.dumps(response, indent=4, ensure_ascii=False).encode('utf-8')
    except:
        return "Error"

if  __name__ == "__main__":
    app.run(debug=True)