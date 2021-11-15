import cv2
import numpy as np
import os

MIN = np.array([0,30,60],np.uint8)
MAX = np.array([20,150,179],np.uint8) #HSV: V-79%
test_path = r'D:\18TCLC_NHAT\nam_4\ky_1\PBL4\Sign-language-prediction\gesturePrediction\test_data02'
test_list = os.listdir(test_path)
for x in test_list:
    image = cv2.imread(test_path + '/' + x)
    originalImage = image.copy()


    filterImg = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
    grayImg = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    grayImg =cv2.equalizeHist(grayImg)
    grayImg = np.expand_dims(grayImg, axis=2)
    grayImg = cv2.resize(grayImg, (256, 256))
    print(grayImg.shape)


    lower = np.array([0, 48, 80], dtype = "uint8")
    upper = np.array([20, 255, 255], dtype = "uint8")
    mask = cv2.inRange(grayImg, 50, 100)
    # filterImage = cv2.dilate(filterImg,cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(3,3)))

    # filterImg = cv2.erode(filterImg,cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(3,3))) #eroding the image
    

    cv2.imshow("image", image)
    cv2.imshow("Mask", mask)
    cv2.imshow('gray', grayImg)

    # cv2.imshow("dilate",filterImg)
    # cv2.imshow("erode", filterImg)
    

    if cv2.waitKey(0) & 0xFF == ord('q'):
        break
        
    cv2.destroyAllWindows() 




