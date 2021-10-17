import React from 'react';
import '../header/Header.css';
import Logo from '../../assets/logo.svg';
//import "../../common/header/Header";

const Header = function(){
const headerStyle = {
    height:'35px',
   textAlign: 'left',
   background: '#ff7f7f',
   position: 'absolute', top: 9, left: 9, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
};
    return(
       <div className='header'>
        <img src={Logo} alt="logo" style={headerStyle}></img>
       </div>
    ) 
}

export default Header;