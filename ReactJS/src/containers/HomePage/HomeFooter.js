import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

// import css files



class HomeFooter extends Component {
  
  render() {
    
    return (
      <div className="home-footer">
            <p>&copy; 2024 Đinh Duy Đạt đẹp trai. More Information, please visit my contact.
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100034687380645">
                     &#8594; Click Here &#8592;
                </a>
            </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
