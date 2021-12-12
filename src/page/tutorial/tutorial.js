import React from "react";
import { Footer, Header } from "../../component";
import {Button} from "react-bootstrap";

export function Tutorial() {
  return (
    <div className="tutorial-container" id="tutorial">
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
      <div className="tutorial">
        <div className="home-section2">
          <div className="content">
            <div className="row">
              <div className="col-lg-12">
                <div className="head-wrap">
                  <div className="section-text">Hướng dẫn sử dụng</div>
                </div>
                <div
                  className="content-wrap"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="col-lg-4 col-sm-12 float-left">
                    <div className="feature-wrap">
                      <div class="feature-text">
                        <h2>Bước 1</h2>
                        <p>Hướng Camera về phía đối phương</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 float-left">
                    <div className="feature-wrap">
                      <div class="feature-text">
                        <h2>Bước 2</h2>
                        <p>Hình ảnh sẽ được gửi lên server để xử lý</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 float-left">
                    <div className="feature-wrap">
                      <div class="feature-text">
                        <h2>Bước 3</h2>
                        <p>Kết quả sẽ được trả về trực tiếp trên video</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<Footer />*/}
    </div>
  );
}
