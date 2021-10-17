import React from 'react';
import '../header/Header.css';
import Logo from '../../assets/logo.svg';
//import { keyframes } from "styled-components";


const Header = function(){
  /*  var spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;*/
const headerStyle = {
    height:'35px',
   textAlign: 'left',
   background: '#ff7f7f',
   position: 'fixed', top: 9, left: 9, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
   animation: 'spin 8s linear infinite',
};
 

    return(
       <div className='header'>
      
        <img  src={Logo} alt="logo" style={headerStyle} className='logoImage' ></img>
        
       </div>
    ) 
}

export default Header;