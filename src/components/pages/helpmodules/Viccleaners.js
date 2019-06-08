import React from 'react';
import Viccleanerslogo from './viccleaners-logo.png';
import './../../../../src/App.css';
function Viccleaners () {
  return (
    <React.Fragment>
      <div style={viccleanerStyle}>
          <img className='img' src={Viccleanerslogo} alt="Vic Cleaners Logo"/>  
          <h3 style={vch3Style}>Vic Cleaners for Movers</h3>
          <nav><a style={vcawebsitelinkStyle} href="https://viccleanersandmovers.com.au/" title="To Vic Cleaners Website">To Vic Cleaners</a></nav>
      </div>
    </React.Fragment>
  )
}

const viccleanerStyle = {
    margin: '20px',
    boxSizing: 'border-box',
    border: '20px solid #6abf16',
    background: '#fff',
    color: '#000',
    textAlign: 'center',
    padding: '40px 10px 40px',
}

const vch3Style = {
    fontSize: '25px',
    color: '#1675bf',
    margin: '20px 0 30px',
}

const vcawebsitelinkStyle = {
    color: '#6abf16',
    border: '2px solid #6abf16',
    borderRadius: '2px',
    padding: '7px 12px',
    cursor: 'pointer',
}

export default Viccleaners;