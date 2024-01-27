import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class ContractUs extends Component {
  render() {
    return <Link to='/contract-us'><Button>Contract us</Button></Link>
  }
}

export default ContractUs;
