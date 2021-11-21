import cv2
import mediapipe as mp
import time

du = mp.solutions.drawing_utils._normalized_to_pixel_coordinates


class handDetector():
    def __init__(self, mode=False, maxHands=2, detectionCon=0.5, trackCon=0.5):
        self.mode = mode
        self.maxHands = maxHands
        self.detectionCon = detectionCon
        self.trackCon = trackCon

        self.mpHands = mp.solutions.hands
        self.hands = self.mpHands.Hands(self.mode, self.maxHands,
                                        self.detectionCon, self.trackCon)
        self.mpDraw = mp.solutions.drawing_utils

    def findHands(self, img, draw=True):
        imgRGB = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        self.results = self.hands.process(imgRGB)
        # print(results.multi_hand_landmarks)
        land_px = []
        image_rows, image_cols, _ = img.shape
        if self.results.multi_hand_landmarks:
            for handLms in self.results.multi_hand_landmarks:
                for idx, landmark in enumerate(handLms.landmark):
                    landmark_px = du(landmark.x, landmark.y,
                                     image_cols, image_rows)
                    land_px.append(landmark_px)
                if draw:
                    self.mpDraw.draw_landmarks(img, handLms,
                                               self.mpHands.HAND_CONNECTIONS)
        return img, land_px