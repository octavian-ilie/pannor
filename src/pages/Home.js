import React from "react";
import './Home.css';
import { useEffect } from 'react'
import HomeSlider from '../components/HomeSlider';
import loadjs from 'loadjs';

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
    <div className="home-container">
      
    </div>
  </div>;
}

export default Home;
