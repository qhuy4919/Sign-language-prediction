import React, { useRef, useEffect } from "react";
import { Hands } from "@mediapipe/hands";
import * as _hands from "@mediapipe/hands";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import "./sign-language.scss";

export function SignLanguage() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  //
  var camera = null;

  function onResults(results) {
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set canvas width
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );

    if (results.multiHandLandmarks && results.multiHandedness) {
      for (const landmarks of results.multiHandLandmarks) {
        window.drawConnectors(canvasCtx, landmarks, _hands.HAND_CONNECTIONS, {
          color: "#7CFC00",
          lineWidth: 5,
        });
        window.drawLandmarks(canvasCtx, landmarks, {
          color: "#FF0000",
          lineWidth: 2,
        });
      }
      //draw contour to optimize image of object
    }
    canvasCtx.restore();
  }

  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      },
    });
    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    hands.onResults(onResults);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await hands.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
    // có lẽ vì chưa có clean up nên khi router await-dòng 67 sẽ vẫn còn nền gây ra bug
  }, []);

  return (
    <div className="video-container">
      <Webcam ref={webcamRef} id="webcam" style={{ width: 640, height: 480 }} />
      <canvas
        ref={canvasRef}
        style={{
          width: 640,
          height: 480,
        }}
      ></canvas>
    </div>
  );
}
