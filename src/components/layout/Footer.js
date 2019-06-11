import React from 'react';

function Footer() {
    return (
        <footer style={footerStyle}>
            <h2>
                More About Sunshine Removals
            </h2>

            <address>
                <ul  style={ulfooterStyle}>
                    <li><span style={spanaddressStyle}>Address:</span> Sunshine, Melbourne</li>
                    <li><span style={spanaddressStyle}>Web:</span> https://sunshineremovals.com.au</li>
                    <li><span style={spanaddressStyle}>Email:</span> <a style={liafooterStyle} href= "mailto:mikerynes@hotmail.com" title="To Email Sunshine" >mikerynes@hotmail.com</a></li>
                    <li><span style={spanaddressStyle}>Phone:</span> <a style={liafooterStyle} href= "tel: 1300367059" title="To Call on Smartphone" >1300 367 059</a></li>
                    <li><span style={spanaddressStyle}>Mob:</span> <a style={liafooterStyle} href= "tel: 0419873224" title="To Call on SmartPhone" >0419 873 224</a></li>
                </ul>
            </address>
        </footer>
    )
}

const footerStyle = {
    background: 'rgb(81, 81, 81)',
    color: '#fd5f00',
    // marginTop: '30px',
    padding: '35px 20px 30px 20px',
  }
  const ulfooterStyle = {
    listStyleType: 'none',
    // background: 'rgb(63, 63, 63)',
    color: '#fff',
    margin: '10px',
    padding: '20px 15px 0',
    borderRadius: '15px',
    lineHeight: '30px',
  }

  const liafooterStyle = {
    color: '#fff',
  }

  const spanaddressStyle = {
      color: '#d18b00',
  }

export default Footer; 