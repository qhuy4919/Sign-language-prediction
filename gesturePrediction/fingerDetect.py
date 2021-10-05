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
                          (max_x, max_y), (0, 255, 0), 2)
        except:
            print("dung vien")

    # cv2.imshow("", image)
    # cv2.waitKey()
    cTime = time.time()
    try:
        fps = 1/(cTime - pTime)
    except:
        print(f"FPS: {0}")

    pTime = cTime
    cv2.putText(image, f'FPS: {int(fps)}', (30, 50), cv2.FONT_HERSHEY_PLAIN,
                3, (255, 0, 0), 3)
    cv2.imshow("Image", image)

    if (cv2.waitKey(1) & 0xff) == ord('q'):
        break
