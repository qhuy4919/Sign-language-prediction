import numpy as np
import cv2
import matplotlib.pyplot as plt
im = cv2.imread('./test.png')
print(im.shape)
imgray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)

# Contoured image
ret, thresh = cv2.threshold(imgray, 120, 255, cv2.THRESH_BINARY)
contours = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)[-2]
#
for contour in contours:
    x, y, w, h = cv2.boundingRect(contour)
    # cv2.drawContours(imgray, contour, -1, (0, 255, 255), 10)
    cv2.rectangle(imgray, (x, y), (x+w, y+h), (0, 255, 0), 2)

cv2.imshow('', imgray)
cv2.waitKey()
