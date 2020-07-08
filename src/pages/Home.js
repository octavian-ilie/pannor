import React from "react";
import './Home.css';
import { useEffect } from 'react'
import loadjs from 'loadjs';
import HomeSlider from '../components/HomeSlider';
import FAPayInvoice from '../components/FAPayInvoice';
import FATopUp from '../components/FATopUp';
import FAChangePlan from '../components/FAChangePlan';
import FAPannorCloud from '../components/FAPannorCloud';
import FAEmergency from '../components/FAEmergency';
import PCShop from '../components/PCShop';
import PCUnlimitedX from '../components/PCUnlimitedX';

function Home(props) {
  let scriptCode = Date.now();

  useEffect(() => {
    loadjs('./static/gsap.js?code=' + scriptCode, function() {
      loadjs('./static/cssRule.js?code=' + scriptCode, function() {
        loadjs('./static/sliderApp.js?code=' + scriptCode);
      });
    });
  });

  return <div className="home-wrapper">
    <div className="home-slider-container">
      <HomeSlider></HomeSlider>
    </div>
    <div className="home-fast-access-container">
      <FAPayInvoice/>
      <FATopUp/>
      <FAChangePlan/>
      <FAPannorCloud/>
      <FAEmergency/>
    </div>
    <div className="promo-cards-container">
      <PCShop/><PCUnlimitedX/><PCShop/>
    </div>
    <div className="home-container">
      
    </div>
  </div>;
}

export default Home;
