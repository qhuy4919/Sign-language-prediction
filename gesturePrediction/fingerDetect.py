import cv2
import time
import os
import numpy as np
import handTrackingModule as htm

wCam, hCam = 640, 640

cap = cv2.VideoCapture(0)
cap.set(3, wCam)
cap.set(4, hCam)

detector = htm.handDetector(detectionCon=0.75)

pTime = 0
contours_size = 100
padding = 50


def reshape_contours(x0, x1, y0, y1, padding):
    if(abs(x0 - x1) > abs(y0 - y1)):
        padding_0 = padding
        x0_new = x0 - padding_0
        x1_new = x1 + padding_0
        len_axis_x = abs(x0 - x1) + 2*padding_0
        padding_1 = (len_axis_x - abs(y0 - y1))//2
        y0_new, y1_new = y0 - padding_1, y1 + padding_1
        print('1')

        return x0_new, x1_new, y0_new, y1_new
    else:
        padding_0 = padding
        y0_new = y0 - padding_0
        y1_new = y1 + padding_0
        len_axis_y = abs(y0 - y1) + 2*padding_0
        padding_1 = (len_axis_y - abs(y0 - y1))//2
        x0_new, x1_new = x0 - padding_1, x1 + padding_1
        print('2')

        return x0_new, x1_new, y0_new, y1_new


while True:
    success, image = cap.read()
    image, landmarks = detector.findHands(image)
    if len(landmarks) > 0:
        try:
            xx, yy = zip(*landmarks)
            min_x = min(xx)
            min_y = min(yy)
            max_x = max(xx)
            max_y = max(yy)
            bbox = [(min_x, min_y), (max_x, min_y),
                    (max_x, max_y), (min_x, max_y)]
            cv2.rectangle(image, (min_x, min_y),
                          (max_x, max_y), (0, 255, 255), 2)
            if max_x//min_x == max_y//min_y:
                print('0')
                bbox = [(min_x - padding, min_y - padding), (max_x + padding, min_y - padding),
                        (max_x + padding, max_y + padding), (min_x - padding, max_y + padding)]
                cv2.rectangle(image, (min_x-padding, min_y - padding),
                              (max_x + padding, max_y + padding), (0, 255, 0), 2)
            else:
                min_x, max_x, min_y, max_y = reshape_contours(
                    min_x, max_x, min_y, max_y, padding)
                bbox = [(min_x, min_y), (max_x, min_y),
                        (max_x, max_y), (min_x, max_y)]
                cv2.rectangle(image, (min_x, min_y),
                              (max_x, max_y), (0, 255, 0), 2)
        except Exception as e:
            print(e)

    # cv2.imshow("", image)
    # cv2.waitKey()
    cTime = time.time()
    try:
        fps = 1/(cTime - pTime)
    except:
        print(f"FPS: 0")

    pTime = cTime
    cv2.putText(image, f'FPS: {int(fps)}', (30, 50), cv2.FONT_HERSHEY_PLAIN,
                3, (255, 0, 0), 3)
    cv2.imshow("Image", image)

    if (cv2.waitKey(1) & 0xff) == ord('q'):
        break
