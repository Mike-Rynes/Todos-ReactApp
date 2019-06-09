import React from 'react';

function Footer() {
    return (
        <footer style={footerStyle}>
            <h2>
                More About Sunshine Removals
            </h2>
            <br/>
            <p><strong>Admin:</strong></p>
            <address>
                <ul  style={ulfooterStyle}>
                    <li>Address: Sunshine, Melbourne</li>
                    <li>Web: https://sunshineremovals.com.au</li>
                    <li>Email: <a style={liafooterStyle} href= "mailto:mikerynes@hotmail.com" title="To Email Sunshine" >mikerynes@hotmail.com</a></li>
                    <li>Phone: <a style={liafooterStyle} href= "tel: 1300367059" title="To Call on Smartphone" >1300 367 059</a></li>
                    <li>Mob: <a style={liafooterStyle} href= "tel: 0419873224" title="To Call on SmartPhone" >0419 873 224</a></li>
                </ul>
            </address>
        </footer>
    )
}

const footerStyle = {
    background: 'rgb(81, 81, 81)',
    color: '#fff',
    // marginTop: '30px',
    padding: '30px 20px',
  }
  const ulfooterStyle = {
    listStyleType: 'none',
    background: 'rgb(63, 63, 63)',
    color: '#fff',
    margin: '10px',
    padding: '30px 15px 30px 15px',
    borderRadius: '15px',
    lineHeight: '30px',
  }

  const liafooterStyle = {
    color: '#fff',
  }

export default Footer; 