import React, { Component } from 'react';
import './CreateColor.css';
import { Alert } from 'reactstrap';

class CreateColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: '',
      green: '',
      blue: '',
      showAlert: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    // console.log(this.state);
    let selecetdColor = '#';
    if (this.state.red < 10) {
      selecetdColor += '0' + this.state.red;
    } else {
      selecetdColor += this.state.red;
    }
    if (this.state.green < 10) {
      selecetdColor += '0' + this.state.green;
    } else {
      selecetdColor += this.state.green;
    }
    if (this.state.blue < 10) {
      selecetdColor += '0' + this.state.blue;
    } else {
      selecetdColor += this.state.blue;
    }

    const key = Math.floor(Math.random() * 10000 + 1);

    localStorage.setItem(key, selecetdColor);
    console.log(`Key: ${key} Color: ${selecetdColor}`);
    this.setState({
      red: '',
      green: '',
      blue: '',
      showAlert: true,
    });
  };

  render() {
    const showAlert = this.state.showAlert ? (
      <Alert color='primary'>Color created successfully!.</Alert>
    ) : null;
    return (
      <div className='form-size'>
        {showAlert}
        <h1>Please create your color</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className='form-control'
            id='redRatio'
            max={99}
            min={0}
            name='red'
            onChange={this.handleChange}
            placeholder='Enter red value(0 - 99)'
            required
            type='number'
            value={this.state.red}
          />
          <br />
          <input
            className='form-control'
            id='greenRatio'
            max={99}
            min={0}
            name='green'
            onChange={this.handleChange}
            placeholder='Enter green value(0 - 99)'
            required
            type='number'
            value={this.state.green}
          />
          <br />
          <input
            className='form-control'
            id='blueRatio'
            max={99}
            min={0}
            name='blue'
            onChange={this.handleChange}
            placeholder='Enter blue value(0 - 99)'
            required
            type='number'
            value={this.state.blue}
          />
          <br />
          <button className='btn btn-primary' style={{ width: '100%' }}>
            Create
          </button>
          <br />
        </form>
      </div>
    );
  }
}

export default CreateColor;
