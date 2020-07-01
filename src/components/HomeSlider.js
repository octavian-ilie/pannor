import React from 'react';
import './HomeSlider.css';

function HomeSlider(props) {
  return (
    <div className="container">
      <div className="slider">

        <div className="box1 box">
          <div className="bg"></div>
          <div className="details">
            <h1>Welcome to Pannor</h1>
            <p>
              We connect every day, millions of customers around the world. Today we say "Hello!" to you too. Let's get to know each other.<br />
            </p>
            <button>DISCOVER</button>
          </div>
        </div>
                
        <div className="box2 box">
          <div className="bg"></div>
          <div className="details">
            <h1>eSIM</h1>
            <p>
                Take advantage of the new eSIM from Pannor, no matter if you choose a new plan or if you're an existing customer.
            </p>
            <button>SWITCH</button>
          </div>
        </div>
                
        <div className="box3 box">
          <div className="bg"></div>
          <div className="details">
            <h1>Conecting the Netherlands</h1>
            <p>
                Keeping everyone connected is our top priority. We work on expanding our 4G and 5G coverage daily. Check our updated coverage map.
            </p>
            <button>COVERAGE</button>
          </div>
        </div>
                
        <div className="box4 box">
          <div className="bg"></div>
          <div className="details">
            <h1>Double data, worry free</h1>
            <p>
                Call and surf the Internet at high 5G speeds with our Pay as you go pack. Activate a new SIM till the end of the month and get double data.
            </p>
            <button>ORDER</button>
          </div>
        </div>
                
        <div className="box5 box">
          <div className="bg"></div>
          <div className="details">
            <h1>myPannor</h1>
            <p>
                Check your balance, activate and deactivate services, pay your invoice and even change your SIM card. Everything is easier in myPannor. 
            </p>
            <button>LOG IN</button>
          </div>
        </div>
                
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" className="prev" width="56.898" height="91" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(0 91) rotate(-90)" fill="#fff"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" className="next" width="56.898" height="91" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(56.898) rotate(90)" fill="#fff"/></svg>

      <div className="trail">
          <div className="box1 active">Pannor NL</div>
          <div className="box2">eSIM</div>
          <div className="box3">Coverage</div>
          <div className="box4">Pay as you go</div>
          <div className="box5">myPannor</div>
      </div>
    </div>
  )
}

export default HomeSlider;
