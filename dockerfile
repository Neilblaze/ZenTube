FROM python:3.9

RUN mkdir -p /home/metrohacks
WORKDIR /home/metrohacks
COPY ./python /home/metrohacks


RUN pip install -r requirements.txt
#RUN gunicorn -b localhost:5000
#RUN gunicorn -w 4 -k uvicorn.workers.UvicornWorker app:app
