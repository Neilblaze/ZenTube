## ZenTube Summarizer (FailSafe Method) (works on only YT videos with EN-US captions — 75% accurate)


#### Local Setup

1. Ensure that the requires dependencies are installed (either manually, or run ```pip install -r requirements.txt```).
2. Run app.py with ```python app.py```.
3. The backend will be live at ```http://localhost:5000/```


#### Usage 

- `POST` or `GET`  http://127.0.0.1:5000/api/summarize?youtube_url=https://www.youtube.com/watch?v=Zxji4mUdI_o [Local]
- `POST` or `GET`  <endpoint>/api/summarize?youtube_url=https://www.youtube.com/watch?v=Zxji4mUdI_o [Local]