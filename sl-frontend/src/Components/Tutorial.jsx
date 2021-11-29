import React from "react";

class Tutorial extends React.Component {
    render() {
        return (
            <div className="tutorial">
                <div className="home-section2">
                    <div className="content">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="head-wrap">
                                    <div className="section-text">Hướng dẫn sử dụng</div>
                                </div>
                                <div className="content-wrap" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <div className="col-lg-4 col-sm-12 float-left">
                                        <div className="feature-wrap">
                                        
                                            <div class="feature-text">
                                                <h2>Bước 1</h2>
                                                <p>
                                                   Hướng Camera về phía đối phương
                                                </p>
                        
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-12 float-left">
                                        <div className="feature-wrap">
                                        
                                            <div class="feature-text">
                                                <h2>Bước 2</h2>
                                                <p>
                                                    Hình ảnh sẽ được gửi lên server để xử lý
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-12 float-left">
                                        <div className="feature-wrap">
                                            
                                            <div class="feature-text">
                                                <h2>Bước 3</h2>
                                                <p>
                                                    Kết quả sẽ được trả về điện thoại
                                                </p>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tutorial;