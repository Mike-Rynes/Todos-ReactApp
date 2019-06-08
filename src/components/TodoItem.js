import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import {  } from 'path';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#d18b00',
      position: 'relative',
      padding: '10px 35px 10px 10px',
      color: '#fff',
      borderBottom: '1px #ccc dashed',
      textDecoration: this.props.todo.completed ? 'line-through' :
      'none'
    }
  }


  render() {
    const {id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
          { title }
          {/* <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button> */}
        </p>
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: '#fff',
  color: '#d18b00',
  border: 'none',
  padding: '4px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  fontWeight: 'bold',
  float: 'right'
}

export default TodoItem
