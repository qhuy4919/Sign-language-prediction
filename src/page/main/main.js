import React from "react";
import { FileText, Calendar, LifeBuoy } from "react-feather";
import { Link } from "react-router-dom";
import "./main.scss";

export function Main() {
  return (
    <div id="main-container">
      <div className="home-section">
        {/* <div className="bg" /> */}
        <div className="content1">
          <div className="row">
            <div className="col-sm-8">
              <div className="section-heading">HEARING ASSIT</div>
              <div className="section-text">
                <p>Sign Language Prediction</p>
                <h5>Make people closer together</h5>
              </div>
              <div className="getting-started">
                <a className="btn" href="#menu">
                  Bắt đầu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section2" id="menu">
        <div className="content">
          <div className="row">
            <div className="col-lg-12">
              <div className="head-wrap">
                <div className="section-heading">MENU</div>
                <div className="section-text">Các chức năng chính</div>
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
                    <div class="feature-img">
                      <a>
                        <FileText />
                      </a>
                    </div>
                    <div class="feature-text">
                      <h2>Hearing Assit</h2>
                      <p>
                        Sử dụng camera của bạn để có thể dự đoán ngôn ngữ kí
                        hiệu.
                      </p>
                      <div className="bt1">
                        <Link className="btn" to="/sign-language">
                          SỬ DỤNG NGAY
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 float-left">
                  <div className="feature-wrap">
                    <div class="feature-img">
                      <a>
                        <Calendar />
                      </a>
                    </div>
                    <div class="feature-text">
                      <h2>Instruction</h2>
                      <p>Hướng dẫn về cách sử dụng website và các chức năng</p>
                      <div className="bt1">
                        <Link className="btn" to="/Tutorial">
                          ĐỌC HƯỚNG DẪN
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 float-left">
                  <div className="feature-wrap">
                    <div class="feature-img">
                      <a>
                        <LifeBuoy />
                      </a>
                    </div>
                    <div class="feature-text">
                      <h2>About Us</h2>
                      <p>
                        Chúng tôi là những sinh viên DUT. Thông tin chi tiết
                        phía dưới
                      </p>
                      <div className="bt1">
                        <Link className="btn" to="/AboutUs">
                          ABOUT US
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
