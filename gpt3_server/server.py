import openai
import sys
import dotenv
import os
from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

dotenv.load_dotenv()
openai.api_key = os.environ.get('OPENAI_API_KEY')
prompt = ""

with open("prompt.txt", "r") as f:
    prompt = f.read()

template = """

Q_secrettoken: {}
A_secrettoken:"""

@app.route('/', methods=['POST'])
def call_robot():
    in_data = request.json['input']
    print(in_data)
    prompt_local = prompt + template.format(in_data)
    result = openai.Completion.create(
        engine="davinci",
        prompt=prompt_local,
        temperature=0.9,
        max_tokens=64,
        stop="Q_secrettoken",
        top_p=1.0,
        frequency_penalty=0.1,
        presence_penalty=-0.1
    )

    text = result.choices[0]['text']
    text = text.strip('     \n')

    print(text)

    if text == "":
        return {"ok": False}
    return {"ok": True, "data": text}

app.run(host='0.0.0.0', port=os.environ.get("PORT"))