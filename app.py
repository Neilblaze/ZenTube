from flask import Flask, request
from flask_cors import CORS
import datetime
from youtube_transcript_api import YouTubeTranscriptApi
import json
from transformers import T5ForConditionalGeneration, T5Tokenizer

# Var to store the model i.e. hold the app 
app = Flask(__name__)

CORS(app)

# Defining resource endpoints
@app.route('/')
def index_page():
    return "Server Healthy — 200 OK"


@app.route('/api/summarize', methods=['GET', 'POST'])
def summarize():
    youtube_url = request.args.get('youtube_url')
    vdo_id = youtube_url.split("=")[1]
    # vdo_id (for example) = 'm7OWXtbiXX8'
    try:
        transcript_list = YouTubeTranscriptApi.list_transcripts(vdo_id)
        transcript =""
        transcript = transcript_list.find_transcript(['en','en_IN']) # find the transcript in english
    except:
        summry = "Check if Transcript is disabled or available in EN"
        return summry
    if(transcript!=""):
        transcript_json = YouTubeTranscriptApi.get_transcript(vdo_id, languages=['en','en-IN'])
        transcript_text = ""
        count = 0
        for i in transcript_json:
            transcript_text += " " + i['text']

        model = T5ForConditionalGeneration.from_pretrained("t5-base")
        tokenizer = T5Tokenizer.from_pretrained("t5-base")
        inputs = tokenizer.encode("summarize: " + transcript_text, return_tensors="pt", max_length=512, truncation=True)
        outputs = model.generate(
            inputs, 
            max_length=150, # huggingface's default is 200
            min_length=40, 
            length_penalty=2.0, 
            num_beams=4, 
            early_stopping=True)
        summary = tokenizer.decode(outputs[0])
        summry = summary.removeprefix("<pad>").removesuffix("</s>")
    #======================================================================================================================
        return summry
    else:
        summry = "Check if Transcript is disabled or available in EN"
        return summry

# server the app when this file is run
if __name__ == '__main__':
    app.run(debug=True)