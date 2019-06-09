import React from 'react';
import Footer from '../layout/Footer';

function Linksusefull() {
  return (
    <div>
      <React.Fragment>
        <h1 style={h1tStyle}>Some Top Links.</h1>
        <p style={pStyle} ><strong>Just a little extra as we know it can get hectic.</strong></p>
        <div style={divlinkstStyle}>
          <ul style={ullistStyle}>
            <li>TELCOS
              <ul style={ullistStyle} >
                <li style={listStyle}><a style={alinkStyle} href="https://www.telstra.com.au/" title="To Telsra Website">Telstra</a></li>
                <li style={listStyle}><a style={alinkStyle} href="https://www.optus.com.au/" title="To Optus Website">Optus</a></li>
                <li style={listStyle}><a style={alinkStyle} href="https://www.vodafone.com.au/" title="To Vodafone Website">Vodafone</a></li>
                <li style={listStyle}><a style={alinkStyle} href="https://www.iinet.net.au/" title="To IINET Website">IINETT</a></li>
              </ul>
            </li>
            <li>UTILITIES &amp; WATER</li>
            <ul style={ullistStyle} >
                <li style={listStyle}><a  style={alinkStyle} href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjZoNDLjJziAhWHJCsKHV7YCE4YABAAGgJzZg&ohost=www.google.com&cid=CAASE-Ro6LCNqv3sbC1y8fUY_Hjk29s&sig=AOD64_1ILMzilPIOD5sBjdwhToAk0bUcQg&q=&ved=2ahUKEwjh88XLjJziAhXEfn0KHcmmCscQ0Qx6BAgLEAE&adurl=" title="To AGL Website">AGL</a></li>
                <li style={listStyle}><a  style={alinkStyle} href="https://www.energyaustralia.com.au/" title="To Energy Australia Website">Energy Australia</a></li>
                <li style={listStyle}><a  style={alinkStyle} href="https://www.alintaenergy.com.au/home" title="To Alinta Website">Alinta</a></li>
                <li style={listStyle}><a  style={alinkStyle} href="https://electricitywizard.com.au/electricity/electricity-providers/electricity-providers-melbourne/" title="To Electricity Wizard">Electricity Wizard</a></li>
                <li style={listStyle}><a  style={alinkStyle} href="https://www.melbournewater.com.au/about-us/contact-us/local-water-company-contacts" title="Victorian Water Retailers Contacts">Victorian Water Retailers</a></li>
              </ul>
            <li>POST</li>
              <ul style={ullistStyle} >
                <li style={listStyle}><a style={alinkStyle} href="https://auspost.com.au/receiving/manage-your-mail/redirect-hold-mail/redirect-mail" title="Redirect Your Mail to New Adress">Australia Post</a></li>
              </ul>
            <li>COUNCILS</li>
              <ul style={ullistStyle} >
                <li style={listStyle}><a  style={alinkStyle} href="https://www.brimbank.vic.gov.au/" title="To Brimbank Council">Brimbank</a></li>
                <li style={listStyle}><a  style={alinkStyle} href="https://www.maribyrnong.vic.gov.au/Home" title="To Maribyrnong Council">Maribyrnong</a></li>
                <li style={listStyle}><a  style={alinkStyle} href="http://www.melbourne.vic.gov.au/" title="To Melbourne City Council">Melbourne City</a></li>
                <li style={listStyle}><a  style={alinkStyle} href="https://www.melton.vic.gov.au/Home" title="To Melton Shire Council">Melton Shire</a></li>
                <li style={listStyle}><a  style={alinkStyle} href="https://www.mvcc.vic.gov.au/" title="To Moonee Valley Council">Moonee Valley</a></li>
                <li style={listStyle}><a  style={alinkStyle} href="https://www.hobsonsbay.vic.gov.au/Home" title="To Hobsons Bay Council">Hobsons Bay</a></li>
                <li style={listStyle}><a  style={alinkStyle} href="https://knowyourcouncil.vic.gov.au/" title="To Know Your Council VIC Gov.">Know Your Council</a></li>
              </ul>
            <li>VICROADS</li>
              <ul style={ullistStyle} >
                <li style={listStyle}><a style={alinkStyle} href="https://www.vicroads.vic.gov.au/licences/renew-replace-or-update/update-your-details/change-of-address" title="Change Licence Adress">VicRoads Change adress.</a></li>
              </ul>
            <li>SCHOOLS</li>
              <ul style={ullistStyle} >
                <li style={listStyle}><a  style={alinkStyle} href="https://en.wikipedia.org/wiki/List_of_government_schools_in_Victoria,_Australia" title="List of Vic State Schools">State</a></li>
                <li style={listStyle}><a  style={alinkStyle} href="https://catholicschoolsguide.com.au/" title="Find a Catholic School near you">Catholic</a></li>
                <li style={listStyle}><a  style={alinkStyle} href="http://www.melbourneprivateschools.com/Melbourne/islamic/" title="Find a Islamic School in Melbourne">Islamic</a></li>
                <li style={listStyle}><a  style={alinkStyle} href="https://privateschoolsguide.com/victoria-private-schools" title="To find a private Scool in Victoria">Private</a></li>
              </ul>
          </ul>
        </div>
      </React.Fragment>
      <Footer/>
    </div>
  )
}

const divlinkstStyle = {
  margin: '20px 10px 40px 20px',
  color: '#fd5f00',
  fontWeight: 'bold',
}

const h1tStyle = {
  margin: '30px 10px 0 20px',
  color: '#fd5f00',
}

const pStyle = {
  marginTop: '20px',
  marginLeft: '20px',
  marginRight: '20px',
}

const ullistStyle = {
  listStyleType: 'none',
  margin: '10px 10px 10px 30px',
}

const listStyle = {
  margin: '0 10px 8px -55px',
}

const alinkStyle = {
  margin: '10px 0 10px 38px',
  background: '#d18b00',
  borderRadius: '3px',
  padding: '4px 8px',
  color: '#fff',
}

export default Linksusefull;
