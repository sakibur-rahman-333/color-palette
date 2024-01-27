import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class CreateColor extends Component {
  render() {
    return (
      <Link to='/create-color'>
        <Button>+ Create</Button>
      </Link>
    );
  }
}

export default CreateColor;
