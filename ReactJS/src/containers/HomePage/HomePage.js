import React, { Component } from "react";
import HomeHeader from "./HomeHeader";
import { connect } from "react-redux";
import Specialty from "./section/Specialty";
import MedicalFacility from "./section/MedicalFacility";
import OutStandingDoctor from "./section/OutStandingDoctor";
import './HomePage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HandBook from "./section/HandBook";
import About from "./section/About";
import HomeFooter from "./HomeFooter";




class HomePage extends Component {
  render() {
    
    
    return (
        <div>
            <HomeHeader/>
          
            
            
       
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
