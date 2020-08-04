import React from 'react';
import LinkButton from '../components/reusable/LinkButton';
import styled from 'styled-components';

import './HomeSlider.css';

const Button = styled(LinkButton)`
  padding: 0.8rem 1.8rem;
  color: #fff;
  background-color: var(--main);
  font-weight: 600;
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;

  &:hover {
    background-color: var(--pannor);
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

const Title = styled.h1`
  color: var(--pannor);
  font-family: var(--pannor-medium);
  font-size: 2.6rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
`;

function HomeSlider(props) {
  return (
    <div className="container">
      <div className="slider">

        <div className="box1 box">
          <div className="bg"></div>
          <div className="details">
            <Title>Welcome to Pannor</Title>
            <p>
              We connect every day, millions of customers around the world. Today we say "Hello!" to you too. Let's get to know each other.<br />
            </p>
            <Button to="/about/our-company">DISCOVER</Button>
          </div>
        </div>
                
        <div className="box2 box">
          <div className="bg"></div>
          <div className="details">
            <Title>eSIM</Title>
            <p>
                Take advantage of the new eSIM from Pannor, no matter if you choose a new plan or if you're an existing customer.
            </p>
            <Button to="/my/sim">SWITCH</Button>
          </div>
        </div>
                
        <div className="box3 box">
          <div className="bg"></div>
          <div className="details">
            <Title>Connecting the Netherlands</Title>
            <p>
                Keeping everyone connected is our top priority. We work on expanding our 4G and 5G coverage daily. Check our updated coverage map.
            </p>
            <Button to="/mobile/benefits/coverage">COVERAGE</Button>
          </div>
        </div>
                
        <div className="box4 box">
          <div className="bg"></div>
          <div className="details">
            <Title>Double data, worry free</Title>
            <p>
                Call and surf the Internet at high 5G speeds with our Pay as you go pack. Activate a new SIM till the end of the month and get double data.
            </p>
            <Button to="/shop/mobile/prepaid">ORDER</Button>
          </div>
        </div>
                
        <div className="box5 box">
          <div className="bg"></div>
          <div className="details">
            <Title>My Pannor</Title>
            <p>
                Check your balance, activate and deactivate services, pay your invoice and even change your SIM card. Everything is easier in myPannor. 
            </p>
            <Button to="/my">SIGN IN</Button>
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
          <div className="box5">My Pannor</div>
      </div>
    </div>
  )
}

export default HomeSlider;
