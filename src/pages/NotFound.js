import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './NotFound.css';

const InlineLink = styled(Link)`
  text-decoration: underline;
  color: #222;

  &:hover {
    color: #fa7268;
  }
`;

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-wrapper">
        <div className="notfound--main-box ease-3">
          <div className="main-box--title">
            Whoops...
          </div>
          <div className="main-box--text">
            The page you're looking for doesn't exist, or something went terribly wrong.
          </div>
          <div className="main-box--buttons">
            <Link to="/" className="main-box--button ease-3">
              Take me home
            </Link>
          </div>
        </div>
        <div className="notfound--cs-box ease-3">
          <div className="secondary-box--title">
            Need help?
          </div>
          <Link to="/support/customer-service" className="cs-box--button ease-3">
            Customer Service
          </Link>
        </div>
      </div>
      <div className="notfound-wrapper">
        <div className="notfound--report-box ease-3">
          <div className="secondary-box--title">
            Link permanently broken?
          </div>
          <div className="report-box--text">
            If you think you are seeing this page due to an error on our end, please take your time to <InlineLink to="/support/report">report this</InlineLink>.
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound;
