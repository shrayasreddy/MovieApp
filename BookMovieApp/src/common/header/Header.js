import React,{useState} from 'react';
import '../header/Header.css';
import Logo from '../../assets/logo.svg';
import  Modal  from '../components/Modal';



const Header = function(){
  
const headerStyle = {
    height:'35px',
   textAlign: 'left',
   background: '#ff7f7f',
   position: 'fixed', top: 9, left: 9, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
   animation: 'spin 8s linear infinite',
};
const [modalOpen, setModalOpen] = useState(false);

    return(
    
       <div className='header'>
        <img  src={Logo} alt="logo" style={headerStyle} className='logoImage' ></img>
        <div id='button'>
        <button variant="contained" href="#contained-buttons" className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }} >Login</button>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
        </div>
       
     
    ) 
}

export default Header;