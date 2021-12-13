import React from "react";
import { Footer, Header } from "../../component";
import {Button} from "react-bootstrap";

export function AboutUs() {
  return (
    <div className="">
        <div className="home-section1" style={{
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8otQ-9CYFEIIGJ4YIuIUBS-LFjnGzq6icw&usqp=CAU")`
        }}>
            {/* <div className="bg" /> */}
            <div className="content1">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="section-heading" >HEARING ASSIT</div>
                        <div className="section-text">
                            <p>Sign Language Prediction</p>
                            <h5>Make people closer together</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <div className="AboutUs">
          <h1> BÁO CÁO</h1>
          <h2> PBL4: ĐỒ ÁN HỆ THỐNG THÔNG MINH</h2>
          <h2> ĐỀ TÀI: HỆ THỐNG HỖ TRỢ NGÔN NGỮ KÝ HIỆU</h2>
          <h2> __________</h2>
          <h3> GIẢNG VIÊN HƯỚNG DẪN</h3>
          <h5> LÊ TRẦN ĐỨC</h5>
          <h2> __________</h2>
          <h3> SINH VIÊN THỰC HIỆN </h3>
          <h5> 1. Trần Đình Quang Huy, 102180252, 18N16</h5>
          <h5> 2. Nguyễn Trọng Nghĩa, 102180262, 18N16</h5>
          <h5> 3. Lê Tấn Nhật Phong, 102180267, 18N16</h5>
          <h2> __________</h2>
          <h3> LỚP HỌC PHẦN</h3>
          <h5> 19.99C</h5>
        {/*<p> Chúng tôi là sinh viên Bách khoa Đà Nẵng</p>*/}
        {/*<p>Đây là Hệ thống hỗ trợ ngôn ngữ ký hiệu</p>*/}
        {/*<p>*/}
        {/*  Hệ thống này giúp người bị khiếm thính có thể hiểu đổi phương đang nói*/}
        {/*  gì{" "}*/}
        {/*</p>*/}
      </div>
      {/*<Footer />*/}
    </div>
  );
}
