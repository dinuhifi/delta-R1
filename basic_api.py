from flask import Flask, jsonify

app = Flask(__name__)
c1 = 0
c2 = 0

@app.route("/index")
def index():
    return "Hello World"

@app.route("/index-with-endpoint")
def index_with_endpoint():
    global c1
    c1 += 1
    return f'Hello World! You have requested this endpoint {c1} times.'

@app.route("/index-json")
def index_json():
    global c2
    c2 += 1
    res = {'response' : 'Hello World', 'times-requested' : c2}
    return jsonify(res)

if __name__ == "__main__":
    app.run(debug=True)