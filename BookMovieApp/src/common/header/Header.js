import React, { Component } from 'react';
import "./Header.css"
import Logo from '../../assets/logo.svg';
import Button from '@mui/material/Button';
import ReactModal from 'react-modal';
import Tabs from '@mui/material/Tabs';
import TabPanel from '../TabPane';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';


import Input from '@mui/material/Input';

import FormHelperText from '@mui/material/FormHelperText';
console.log((window.location.href.indexOf("movie") > -1))
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalopen: false,
      modalTab: 0,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      contactNo: ''

    }
  }
  setOpenModal = () => {
   
    this.setState({ modalopen: !this.state.modalopen })
  }

  handleTabChange = (e, value) => {
   
    this.setState({ modalTab: value })
  }
  render() {
    return (
      <div>


        <div class="HeaderBar">
          <img className="Logo" src={Logo} />
          <div class="header-right">
            {(window.location.href.indexOf("movie/") > -1) ? <Button className="BookShowBtn" variant="contained" color="primary" > Book Show</Button> : ''}
            <Button variant="contained" color="inherit" onClick={this.setOpenModal} > Login</Button>


          </div>
        </div>
        <ReactModal
          style={customStyles}
          isOpen={this.state.modalopen}
        >
          <div style={{ textAlign: "end" }}>
            <Button variant="outlined" onClick={this.setOpenModal}>x</Button>
          </div>
          <hr></hr>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={this.state.modalTab} onChange={this.handleTabChange} aria-label="basic tabs example">
              <Tab value={0} label="LOGIN" />
              <Tab value={1} label="REGISTER" />
            </Tabs>
          </Box>

          <TabPanel value={this.state.modalTab} index={0} >
            <FormGroup>
              <FormControl required={this.state.firstName == '' ? true : false} color="primary">
                <InputLabel htmlFor="username">UserName</InputLabel>
                <Input id="username" aria-describedby="my-helper-text" />
              </FormControl>
              <FormControl required={this.state.password == '' ? true : false}  >
                <InputLabel htmlFor="Password">Password</InputLabel>
                <Input id="Password" aria-describedby="my-helper-text" />
              </FormControl>
              <Button variant="contained">LOGIN</Button>
            </FormGroup>
          </TabPanel>


          <TabPanel value={this.state.modalTab} index={1}>
            <FormGroup>
              <FormControl required={this.state.firstName == '' ? true : false} color="primary">
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <Input id="firstName" aria-describedby="my-helper-text" />
                <FormHelperText error={this.state.firstName == '' ? true : false} id="component-error-text">required</FormHelperText>
              </FormControl>
              <FormControl required={this.state.lastName == '' ? true : false}  >
                <InputLabel htmlFor="Password">Last Name</InputLabel>
                <Input id="Password" aria-describedby="my-helper-text" />
                <FormHelperText error={this.state.lastName == '' ? true : false} id="password-text">required</FormHelperText>
              </FormControl>
              <FormControl required={this.state.firstName == '' ? true : false} color="primary">
                <InputLabel htmlFor="username">UserName</InputLabel>
                <Input id="username" aria-describedby="my-helper-text" />
                <FormHelperText error={this.state.firstName == '' ? true : false} id="component-error-text">required</FormHelperText>
              </FormControl>
              <FormControl required={this.state.firstName == '' ? true : false}  >
                <InputLabel htmlFor="Password">Password</InputLabel>
                <Input id="Password" aria-describedby="my-helper-text" />
                <FormHelperText error={this.state.firstName == '' ? true : false} id="component-error-text">required</FormHelperText>
              </FormControl>
              <FormControl required={this.state.firstName == '' ? true : false} color="primary">
                <InputLabel htmlFor="username">UserName</InputLabel>
                <Input id="username" aria-describedby="my-helper-text" />
                <FormHelperText error={this.state.firstName == '' ? true : false} id="component-error-text">required</FormHelperText>
              </FormControl>
              <Button variant="contained">REGISTER</Button>
            </FormGroup>
          </TabPanel>

        </ReactModal>

      </div>
    )
  }
}

export default Header
