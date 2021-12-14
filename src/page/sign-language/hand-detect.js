import React from "react";
import raw_image from "../../assets/images/raw_image.jpg";
export function ImageProcessing() {
  // var src = cv.matFromImageData(raw_data);
  // console.log(src);
  return (
    <div>
      <img src={raw_image} alt="" />
    </div>
  );
}
