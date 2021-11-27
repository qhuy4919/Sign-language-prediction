import React from "react";
import { FileText, Calendar, LifeBuoy } from "react-feather";

class Main extends React.Component {
    render() {
        return (
            <div id="body">
                <div className="home-section1">
                    <div className="bg" />
                    <div className="content">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="section-heading">HEARING ASSIT</div>
                                <div className="section-text">
                                    <p>Sign Language Prediction</p>
                                    <h5>Make people closer together</h5>
                                </div>
                                <div className="getting-started">
                                    <a className="btn" href="#">
                                        Bắt đầu
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-section2">
                    <div className="content">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="head-wrap">
                                    <div className="section-heading">MENU</div>
                                    <div className="section-text">Các chức năng chính</div>
                                </div>
                                <div className="content-wrap" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
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
                                                    <a className="btn" href="#">
                                                        SỬ DỤNG NGAY
                                                    </a>
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
                                                <p>
                                                    Hướng dẫn về cách sử dụng website và các chức năng
                                                </p>
                                                <div className="bt1">
                                                    <a className="btn" href="#">
                                                        ĐỌC HƯỚNG DẪN
                                                    </a>
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
                                                    <a className="btn" href="#">
                                                        ABOUT US
                                                    </a>
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
}
export default Main;
