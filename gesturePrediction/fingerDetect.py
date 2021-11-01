import cv2
import time
import os
import numpy as np
import handTrackingModule as htm
from keras.models import load_model

model = load_model('SL_model1.h5')

wCam, hCam = 640, 640

cap = cv2.VideoCapture(0)
cap.set(3, wCam)
cap.set(4, hCam)

detector = htm.handDetector(detectionCon=0.75)

pTime = 0
contours_size = 100
padding = 50

label = {}
for i in range(ord('A'), ord('Z')+1):
    label[chr(i)] = i - ord('A')
    label[i - ord('A')] = chr(i)
label['del'] = 26
label['nothing'] = 27
label['space'] = 28
label[26] = 'del'
label[27] = 'nothing'
label[28] = 'space'

def getCalssName(classNo):
    return label[classNo]

def grayscale(img):
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    return img

def equalize(img):
    img =cv2.equalizeHist(img)
    return img

def preprocessing(img):
    img = grayscale(img)
    img = equalize(img)
    return img


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

##
while True:
    success, image = cap.read()
    image, landmarks = detector.findHands(image)

    ##
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
                cv2.rectangle(image, (min_x-padding, min_y - padding),
                            (max_x + padding, max_y + padding), (0, 255, 0), 2)
                min_x, max_x, min_y, max_y =  min_x-padding, max_x + padding, min_y - padding, max_y + padding

            else:
                min_x, max_x, min_y, max_y = reshape_contours(
                    min_x, max_x, min_y, max_y, padding)
                cv2.rectangle(image, (min_x, min_y),
                            (max_x, max_y), (0, 255, 0), 2)
    except Exception as e:
        print(e)

    
    cTime = time.time()
    try:
        fps = 1/(cTime - pTime)
    except:
        print(f"FPS: 0")

    pTime = cTime

    # PROCESS IMAGE
    cropImage = image[min_y:max_y, min_x:max_x]
    cropImage = np.asarray(cropImage)
    cropImage = cv2.resize(cropImage, (64, 64))
    cropImage = preprocessing(cropImage)
    cv2.imshow("Preprocessing", cropImage)
    cropImage = cropImage.reshape(1, 64, 64, 1)

    #Predict 

    predictions = model.predict(cropImage)
    classIndex = model.predict_classes(cropImage)     
    probabilityValue =np.amax(predictions)
    print(classIndex, probabilityValue)
    cv2.putText(image, str(round(probabilityValue*100,2) )+"%", (180, 75), cv2.FONT_HERSHEY_PLAIN, 0.75, (0, 0, 255), 2, cv2.LINE_AA)
    cv2.putText(image, f'FPS: {int(fps)}', (30, 50), cv2.FONT_HERSHEY_PLAIN,
                3, (255, 0, 0), 3)
    cv2.imshow("Result", image)

    if (cv2.waitKey(1) & 0xff) == ord('q'):
        break
    