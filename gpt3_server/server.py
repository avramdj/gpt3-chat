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

filedir = os.path.dirname(os.path.realpath(__file__))

with open(filedir + "/prompt.txt", "r") as f:
    prompt = f.read()

template = """

Person1: {}
Person2:"""

user_history = {}

@app.route('/', methods=['POST'])
def call_robot():
    in_data = request.json['input']
    uid = request.json['userid']
    history = ""

    if uid in user_history:
        history = user_history[uid]

    prompt_local = prompt + history + template.format(in_data)

    result = openai.Completion.create(
        engine="davinci",
        prompt=prompt_local,
        temperature=0.9,
        max_tokens=64,
        stop=["Person1", "Person2", "\n"],
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=-0.6
    )

    text = result.choices[0]['text']
    text = text.strip('     \n')

    if text == "" or text == None:
        return {"ok": False}

    if uid in user_history:
        user_history[uid] += text + '\n'
    else:
        user_history[uid] = text + '\n'

    return {"ok": True, "data": text}

@app.route('/', methods=['DELETE'])
def delete_history():
    uid = request.json['userid']
    try:
        del user_history[uid]
    except KeyError:
        pass

    return {"ok": True}


app.run(host='0.0.0.0', port=os.environ.get("PORT"))

