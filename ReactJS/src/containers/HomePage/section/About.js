import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

// import css files



class About extends Component {
  
  render() {
    
    return (
      <div className="section-share section-about">
       <div className="section-about-header">
        Truyền thông nói về BookingCare
       </div>
       <div className="section-about-content">
        <div className="content-left">
        <iframe width="100%" height="400px" 
        src="https://www.youtube.com/embed/FyDQljKtWnI" 
        title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
        </iframe>
        </div>
        <div className="content-right">
            <p>
                Người bệnh dự định thăm khám tại khoa Tiêu hóa Bệnh viện Chợ Rẫy
                có thể tham khảo hướng dẫn đi khám, kinh nghiệm và một số lưu ý
                trong bài viết dưới đây.
            </p>

        </div>

       </div>
       </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
