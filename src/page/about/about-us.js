import React from "react";
import { Footer, Header } from "../../component";

export function AboutUs() {
  return (
    <div className="">
      <Header />
      <div className="AboutUs">
        <p> Chúng tôi là sinh viên Bách khoa Đà Nẵng</p>
        <p>Đây là hệ thống nhận diện ngôn ngữ ký hiệu</p>
        <p>
          Hệ thống này giúp người bị khiếm thính có thể hiểu đổi phương đang nói
          gì{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
}
