import React from 'react';
import Viccleaners from './helpmodules/Viccleaners';
import Footer from '../layout/Footer';
function Help() {
    return (
        <div>
            <React.Fragment>
            <h2 style={h2tStyle}>Services To Help Your Removals.</h2>
            <p style={pStyle}><strong>This section is ideal for the busy and the incapacitated. We look for proffessional services that complement moving locations.</strong></p>
            <div  style={divlearnersStyle}>
              <Viccleaners/>
            </div>
            </React.Fragment>
            <Footer/>
        </div>
    )
}

const h2tStyle = {
    margin: '30px 20px',
    color: '#d18b00',
}

const pStyle = {
    margin: '20px 20px',
}

const divlearnersStyle = {
    margin: '30px 0 40px',
}

export default Help;