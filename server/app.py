from flask import Flask, Response
import cv2
import numpy as np
import threading
import handTrackingModule as htm
from keras.models import load_model
model = load_model('model.h5')
app = Flask(__name__)


# initialize a lock used to ensure thread-safe
# exchanges of the frames (useful for multiple browsers/tabs
# are viewing tthe stream)
lock = threading.Lock()

#
camera=cv2.VideoCapture(0)
contours_size = 100
padding = 55
threshold = 0.75

labels = ['alo', 'banlanhat', 'disagree' ,'hello','hengaplai', 'iloveyou', 
          'maibennhaubannhe', 'nope', 'ok', 'quaylennao', 'sorry','thankyou']
label = {
}
for i in range(len(labels)):
    label[labels[i]] = i
    label[i] = labels[i]

def getCalssName(classNo):

   return label[classNo[0]]

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

@app.route('/stream',methods = ['GET'])
def stream():
   return Response(generate(), mimetype = "multipart/x-mixed-replace; boundary=frame")

def generate():
   #load hand tracking module 
   detector = htm.handDetector(detectionCon=0.75)
   while True:
        ## read the camera frame
        success,frame=camera.read()      
        _, landmarks = detector.findHands(frame)
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
                print('no hand')
            # PROCESS IMAGE
            try:
               cropImage = frame[min_y:max_y, min_x:max_x]
               cropImage = np.array(cropImage)
               cropImage = cv2.resize(cropImage, (64, 64))
               hsv = cv2.cvtColor(cropImage, cv2.COLOR_BGR2HSV)
               mask = cv2.inRange(hsv, (58,255,255), (62, 255, 255))
               cv2.imshow("Mask", mask)
               mask= mask.reshape(1, 64, 64,1)
               # mask = preprocessing(mask)

               

               #Predict 
               predictions = model.predict(mask)
               classIndex = model.predict_classes(mask)     
               probabilityValue =np.amax(predictions)
               if probabilityValue > threshold:
                     cv2.putText(frame, str(round(probabilityValue*100,2) )+"%", (180, 120), cv2.FONT_HERSHEY_PLAIN, 3, (0, 0, 255), 2, cv2.LINE_AA)
                     cv2.putText(frame, f'{getCalssName(classIndex)}', (150, 50), cv2.FONT_HERSHEY_PLAIN,
                                 2, (255, 0, 0), 2)
            except Exception as e: 
               print(e)
               pass

            ret,buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
        
            yield(b'--frame\r\n'
                  b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

if __name__ == '__main__':
   host = "127.0.0.1"
   port = 8000
   debug = True
   options = None
   app.run(host, port, debug, options)