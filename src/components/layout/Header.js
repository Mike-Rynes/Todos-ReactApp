import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../src/applogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const mobile = <FontAwesomeIcon icon={faMobileAlt} />;
const envelope = <FontAwesomeIcon icon={faEnvelope} />;
const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
const youtube = <FontAwesomeIcon icon={faYoutube} />;

function Header() {
  return (
      <header style={headerStyle}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={h1Style}>Sunshine's To Do App</h1>
          <nav style={navStyle}><NavLink exact activeStyle={{ color:'#fff' }} style={ linkStyle } to="/">Todo</NavLink> | <NavLink  exact activeStyle={{ color:'#fff' }} style={linkStyle} to="/about">About</NavLink> | <NavLink  exact activeStyle={{ color:'#fff' }} style={linkStyle} to="/Linksusefull">Links</NavLink> | <NavLink  exact activeStyle={{ color:'#fff' }} style={linkStyle} to="/Help">Help</NavLink></nav>
          <nav style={navAbtnStyle} ><a style={abtnStyle} href="https://sunshineremovals.com.au" aria-label="To Sunshine Removals Official Wesite">To Sunshine Removals</a></nav>
          <nav style={navcontactStyle}><a style={apStyle} href="tel: 0419873224" aria-label="To Smartphone link for Sunshine Removals Victoria">{mobile}</a> <a style={apStyle} href="https://sunshineremovals.com.au/contacts-moving-home/" title="To Contact Us Form">{envelope}</a></nav>
          <p style={parStyle}>Stop The Head Spin!</p>
          <p style={parsocialStyle}><a style={a2pStyle} href="https://www.facebook.com/sunshineremovals1" aria-label="To Sunshine Removals Facebook Page">{facebook}</a> <a style={a2pStyle} href="https://www.youtube.com/channel/UC3Xg_s4HkI58U3CopSiQx3A" aria-label="To Sunshine Removals YouTube Channel"> {youtube} </a></p>
          <p style={copyrightStyle}>Sunshine Removals &copy; Copyright 2019</p>
      </header>
  )
}

const headerStyle = {
  background: '#fd5f00',
  color: '#fff',
  textAlign: 'center',
  padding: '40px 10px 40px',
}

const navStyle = {
  color: '#1a1a1a',
  marginTop: '10px',
  marginBottom: '10px',
}

const navAbtnStyle = {
  marginTop: '40px',
}

const navcontactStyle = {
  color: '#1a1a1a',
  margin: '40px 13px 0 0',
  wordSpacing:'20px',
}

const linkStyle = {
  color: '#1a1a1a',
  fontWeight: 'bold',
  textDecoration: 'none',
}

const h1Style = {
  position: 'relative',
  zIndex: '1',
  fontSize: '30px',
  marginTop: '15px',
}

const abtnStyle = {
  backgroundColor: 'rgba(0, 0, 0, .2)',
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
  borderRadius: '20px',
  padding: '10px 40px',
}

const apStyle = {
  fontSize: '50px',
  color: '#fff',
}

const parStyle = {
  fontSize: '20px',
  color: '#000',
  margin: '20px 0',
  fontWeight: 'bolder',
}

const parsocialStyle = {
  fontSize: '30px',
  marginLeft: '-5px',
  wordSpacing: '15px',
}

const a2pStyle = {
  fontSize: '30px',
  wordSpacing: '15px',
  color: '#fff',
}

const copyrightStyle = {
  fontSize: '13px',
  color: '#000',
  margin: '20px 0 -25px',
}

export default Header; 