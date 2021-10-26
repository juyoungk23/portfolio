from flask import Flask, render_template, request, redirect, url_for, send_from_directory

app = Flask(__name__, static_url_path='', static_folder='frontend/build')

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('css', path)

@app.route('/assets/<path:path>')
def send_assets(path):
    return send_from_directory('assets', path)

@app.route('/templates/<path:path>')
def send_templates(path):
    return send_from_directory('templates', path)


if __name__ == '__main__':
    app.run(debug=True)