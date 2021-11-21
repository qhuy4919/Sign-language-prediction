from __future__ import division, print_function
# coding=utf-8
import sys
import os
import glob
import re
import numpy as np
import cv2

#hand tracking modul
import handTracking as htm 
# Keras
from keras.applications.imagenet_utils import preprocess_input, decode_predictions
from keras.models import load_model
from keras.preprocessing import image

# Flask utils
from flask import Flask, request, render_template, Response
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer

# Define a flask app
app = Flask(__name__)

# Model saved with Keras model.save()
MODEL_PATH = 'model/SL_model5.h5'

# Load your trained model
model = load_model(MODEL_PATH)

#load video captured 
camera=cv2.VideoCapture(0)

#load hand tracking module 
detector = htm.handDetector(detectionCon=0.75)

print('Model loaded. Check http://127.0.0.1:5000/')
contours_size = 100
padding = 55

def createLabel(label):
    for i in range(ord('A'), ord('Z')+1):
        label[chr(i)] = i - ord('A')
        label[i - ord('A')] = chr(i)
    label['del'] = 26
    label['nothing'] = 27
    label['space'] = 28
    label[26] = 'del'
    label[27] = 'nothing'
    label[28] = 'space'
    return label


def grayscale(img):
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # img = skimage.transform.resize(img, (64, 64, 1))

    return img

def equalize(img):
    img =cv2.equalizeHist(img)
    return img

def preprocessing(img):
    img = grayscale(img)
    img = equalize(img)
    return img

def model_predict(img):
    x = cv2.imread(img)
    # Preprocessing the image
    x = np.array(x)   
    x = cv2.resize(x,(64,64))
    x = preprocessing(x)
    x = x.reshape(1, 64, 64, 1)
    preds = model.predict(x)
    return preds

def reshape_contours(x0, x1, y0, y1, padding):
    if(abs(x0 - x1) > abs(y0 - y1)):
        padding_0 = padding
        x0_new = x0 - padding_0
        x1_new = x1 + padding_0
        len_axis_x = abs(x0 - x1) + 2*padding_0
        padding_1 = (len_axis_x - abs(y0 - y1))//2
        y0_new, y1_new = y0 - padding_1, y1 + padding_1

        return x0_new, x1_new, y0_new, y1_new
    else:
        padding_0 = padding
        y0_new = y0 - padding_0
        y1_new = y1 + padding_0
        len_axis_y = abs(y0 - y1) + 2*padding_0
        padding_1 = (len_axis_y - abs(y0 - y1))//2
        x0_new, x1_new = x0 - padding_1, x1 + padding_1

        return x0_new, x1_new, y0_new, y1_new

def generate_frames():
    while True:
            
        ## read the camera frame
        
        success,frame=camera.read()      
        success01, landmarks = detector.findHands(frame)
        if not success:
            break
        else:
              #
            try:

                min_x = 0
                min_y = 0
                max_x = 0
                max_y = 0
                if len(landmarks) > 0:
                    xx, yy = zip(*landmarks)
                    min_x = min(xx)
                    min_y = min(yy)
                    max_x = max(xx)
                    max_y = max(yy)
                    # cv2.rectangle(image, (min_x, min_y),
                    #             (max_x, max_y), (0, 255, 255), 2)
                    if max_x//min_x == max_y//min_y:
                        cv2.rectangle(frame, (min_x-padding, min_y - padding),
                                    (max_x + padding, max_y + padding), (0, 255, 0), 2)
                        min_x, max_x, min_y, max_y =  min_x-padding, max_x + padding, min_y - padding, max_y + padding

                    else:
                        min_x, max_x, min_y, max_y = reshape_contours(
                            min_x, max_x, min_y, max_y, padding)
                        cv2.rectangle(frame, (min_x, min_y),
                                    (max_x, max_y), (0, 255, 0), 2)
            except Exception as e:
                print(e)

            ret,buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
        
        yield(b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')






@app.route('/', methods=['GET'])
def index():
    # Main page
    return render_template('index.html')


@app.route('/predict', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        # Get the file from post request
        f = request.files['file']
        # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'upload', secure_filename(f.filename))
        f.save(file_path)

        # Make prediction
        preds = model_predict(file_path, model)
        label = createLabel({})
        result = label[np.argmax(preds)]

        return result
    return None

@app.route('/video')
def video():
    return Response(generate_frames(),mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run(debug=True)

