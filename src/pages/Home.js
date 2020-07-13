import React from "react";
import './Home.css';
import { useEffect } from 'react';
import loadjs from 'loadjs';
import defaultTitle from '../rules/defaultTitle';
import HomeSlider from '../components/HomeSlider';
import FAPayInvoice from '../components/FAPayInvoice';
import FATopUp from '../components/FATopUp';
import FAChangePlan from '../components/FAChangePlan';
import FAPannorCloud from '../components/FAPannorCloud';
import FAEmergency from '../components/FAEmergency';
import PCShop from '../components/PCShop';
import PCUnlimitedX from '../components/PCUnlimitedX';
import PCNetflix from '../components/PCNetflix';
import HC5G from '../components/HC5G';
import HCiPhone11 from '../components/HCiPhone11';
import HCHomepack4G from '../components/HCHomepack4G';
import HCmyPannorApp from '../components/HCmyPannorApp';
import PopularPhones from '../components/home/PopularPhones';
import DeliveryOptions from '../components/home/DeliveryOptions';
import Footer from '../components/Footer';

function Home(props) {
  document.title = defaultTitle + 'Mobile, landline, internet and TV with great coverage';

  let scriptCode = Date.now();

  useEffect(() => {
    loadjs('./static/gsap.js?code=' + scriptCode, function() {
      loadjs('./static/cssRule.js?code=' + scriptCode, function() {
        loadjs('./static/sliderApp.js?code=' + scriptCode);
      });
    });
  });

  return (
    <div className="home-wrapper">
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
        <PCShop/><PCUnlimitedX/><PCNetflix/>
      </div>
      <HC5G/>
      <HCiPhone11/>
      <HCHomepack4G/>
      <HCmyPannorApp/>
      <PopularPhones/>
      <DeliveryOptions/>
      <Footer/>
    </div>
  );
}

export default Home;
