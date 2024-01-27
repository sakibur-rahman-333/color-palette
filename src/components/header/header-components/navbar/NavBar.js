import ContractUs from '../contract-us/ContractUs';
import './Navbar.css';
import CreateColorButton from './create-color-button/CreateColorButton';
import Logo from './logo/Logo';
import React from 'react';

function Navbar() {
  return (
    <div className='Navbar'>
      <Logo />
      <CreateColorButton />
      <ContractUs />
    </div>
  );
}

export default Navbar;
