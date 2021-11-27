import React from "react";
import { Container } from "reactstrap";

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <footer className="footer">
                    <div className="top-footer">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="footer-logo">
                                    <a href="/" title="Hearing">
                                        HEARING ASSIT
                                    </a>
                                    <p className="tagline">Sign Language Prediction</p>
                                </div>
                            </div>
                            <div class="col-sm-9">
                                <div className="row">
                                    <div className="col-lg-3 col-sm-6">
                                        <h4>Thành Viên</h4>
                                        <p className="tagline">Trần Đình Quang Huy</p>
                                        <p className="tagline">Nguyễn Trọng Nghĩa</p>
                                        <p className="tagline">Lê Tấn Nhật Phong</p>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <h4>Lớp Sinh Hoạt</h4>
                                        <p className="tagline">18TCLC_Nhat</p>
                                        <p className="tagline">18TCLC_Nhat</p>
                                        <p className="tagline">18TCLC_Nhat</p>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <h4>Lớp Học Phần</h4>
                                        <p className="tagline">19.99C</p>
                                        <p className="tagline">19.99C</p>
                                        <p className="tagline">19.99C</p>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <h4>Tên Bộ Môn</h4>
                                        <p className="tagline">PBL4: Hệ thống thông minh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Footer;
