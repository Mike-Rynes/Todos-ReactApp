import React, { Component } from "react";
// import Addcheckbox from './Addcheckbox';
import PropTypes from 'prop-types';
import '../../src/App.css';

export class AddTodo extends Component {
  state = {
    title: ''
  }
  
onSubmit = (e) => {
  e.preventDefault();
  this.props.addTodo(this.state.title);
  this.setState({title: '' });
}

onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <React.Fragment>
        <div style={adddivStyle}>
          <h2 style={h2Style}>Home Movers To dos List</h2>
          <ul style={addulStyle}>
            <li>
              <label className="containerCheckbox">Check When Completed
                <input type="checkbox" defaultChecked="checked" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="containerCheckbox">Materials and Stuff
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="containerCheckbox">Boxes and or Bags
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="containerCheckbox">Tape, Scissors &amp; Marker
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="containerCheckbox">Butchers Paper &amp; Bubble Wrap
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="containerCheckbox">Filler For Gaps in Boxes
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="containerCheckbox">Tools for Dismantling Furniture
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
          </ul>
          {/* <Addcheckbox /> */}
        </div>
        <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
          <input type="text" name="title" placeholder="Add Todo ..." style={{flex: '10', padding: '10px' }} 
          value={this.state.title} onChange={this.onChange} />
          <input type="submit" value="Submit" className="btn" style={btnsubmitStyle} />
        </form>
      </React.Fragment>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

const btnsubmitStyle = {
  flex: '1',
  padding: '15px 20px',
}

const h2Style = {
  margin: '0x20px 0 20px',
  color: '#d18b00',
}

const adddivStyle = {
  padding: '40px 20px',
}

const addulStyle = {
  listStyleType: 'none',
  margin: '20px 20px -10px 10px',
}

export default AddTodo;
