import React from 'react';
import Footer from '../layout/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const externallink = <FontAwesomeIcon icon={faExternalLinkAlt} />

function About() {
  return (
    <React.Fragment>
      <React.Fragment>
        <div>
          <h1 style={h1Style}>Furniture Removalists</h1>
          <p style={pStyle} ><strong>Moving Melbournians since 2003. In that time we have Established our services to provide moversd with a affordable and safe move for your Furniture.</strong></p>
          <p style={pStyle} >We know that it does not matter how long a Moving Company has been operating. Staff and Equipment are just as important. After all no good going to a gun fight with a Steak Knife.</p>
          <h2 style={h2Style}>What Furniture moving services we offer.</h2>
          <p style={pStyle}>Our main services are moving house-hold and office Goods around Melbourne and Victorian Country. But we are always open to suggestions of a new task. The types of moves are numerous so we will not bore you as most will not be related to your needs.</p>
          <ul style={ullistStyle}>
            <li style={listStyle}>{externallink} <a style={alistStyle} href="https://sunshineremovals.com.au/removals-melbourne-furniture-removalist/moving-house/" title="Residential Section">Residential</a></li>
            <li style={listStyle}>{externallink} <a style={alistStyle} href="https://sunshineremovals.com.au/removals-melbourne-furniture-removalist/office-relocation-moving/" title="Office and Business Moving">Office</a></li>
            <li style={listStyle}>{externallink} <a style={alistStyle} href="https://sunshineremovals.com.au/removals-melbourne-furniture-removalist/piano-removals/" title="Pianos and Pool Tables moved">Piano</a></li>
            <li style={listStyle}>{externallink} <a style={alistStyle} href="https://sunshineremovals.com.au/removals-melbourne-furniture-removalist/" title="Removalist Services Section">All Services</a></li>
          </ul>
        </div>
      </React.Fragment>
      <React.Fragment>
      <div style={aboutStyle}>
      <h2 style={h2aboutStyle}>About This App</h2>
      <p style={paboutStyle} ><strong>This is Sunshine Removals Todo List App</strong></p>
      <ol style={ordlistStyle}>
        <li>Tick to cross Off what is done</li>
        <li>Add a Task &amp; press Submit</li>
        <li>Remove( delete ) a Task from Todo List</li>
        <li>So Start you Itenary</li>
        <li>You can delete all this and use it as a Shopping List</li>
        <li>Press done to go back to Home Screen at the Top.</li>
      </ol>
      <p style={paboutStyle} >We hope you find this usefull in planning your Relocation. At Sunshine Removals we always try that little bit EXTRA. This app you can use for free and you do not have to login or any other way of getting your details.</p>
      </div>
      </React.Fragment>
      <Footer/>
    </React.Fragment>
  )
}
const h1Style = {
  margin: '30px 10px 0 20px',
  color: '#fd5f00',
}
const h2Style = {
  margin: '30px 10px 0 20px',
  color: '#d18b00',
}

const aboutStyle = {
  backgroundColor: '#d18b00',
  padding: '40px 10px 40px 0',
  marginTop: '20px',
}

const h2aboutStyle = {
  color: '#fff',
  paddingLeft: '20px',
}
const paboutStyle = {
  color: '#fff',
  padding: '20px',
}

const pStyle = {
  marginTop: '20px',
  marginLeft: '20px',
  marginRight: '10px',
}

const ordlistStyle = {
  marginTop: '20px',
  marginLeft: '50px',
  marginRight: '10px',
  color: ' #fff',
}

const ullistStyle = {
  listStyleType: 'none',
  margin: '10px 0 10px 50px',
  color: '#d18b00',
}

const listStyle = {
  marginTop: '15px',
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#d18b00',
}
const alistStyle = {
  color: '#000',
  textDecoration:'underline',
}

export default About;