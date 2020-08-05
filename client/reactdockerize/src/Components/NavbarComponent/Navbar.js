import React, { Component, useState} from 'react';
import {NavLink} from 'react-router-dom';
import logo from './logo.png'
import Search from './Search'
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import GoogleLogin from "react-google-login";
import './Navbar.css'
function Navbar() {
    
       
        const [open, setOpen] = React.useState(false);
        const [id,setId] = useState()
        const handleClickOpen = () => {
            if(state == "Sign In"){
                setOpen(true);
            }
            else if(state == "Sign Out"){
                setState("Sign In")
            }
          
        };
        
      
        const handleClose = () => {
          setOpen(false);
        };
        const [flag,setFlag] = useState(false)
        const [name,setName] = useState("")
        const [state, setState] = useState("Sign In")
     
    
        function responseGoogle(response){
            console.log(response.profileObj)
            setState("Sign Out")
            setName(response.profileObj.name)
            setOpen(false)
            setId(response.profileObj.email)
        }
    
        function failedLogin(response){
            setState("Sign In")
        }
        
        
        return(
            <nav className="app">
                
                <ul>
                    <img src={logo} alt="logo" width="170" height="100"/>
                    <li><NavLink exact activeClassName="current" to='/' aria-label="Home">Home</NavLink></li>
                    <li><NavLink exact activeClassName="current" to="/PDFBooks/" aria-label="PDF Books" >Books</NavLink></li>
                    <li><NavLink exact activeClassName="current" to="/AudioBooks/" aria-label="AudioBooks">Audio Books </NavLink></li>
                    <li><NavLink exact activeClassName="current" to={`/Saved/${id}/`} aria-label="Saved Books">Saved </NavLink></li>
                    <li><Search/></li>
                    <li> <a href ="https://www.samarthanam.org/donate/">Donate</a></li>
                    {/* <li><NavLink exact activeClassName="current" to="/SignIn/" aria-label="Signin Page" onClick ={handle}>Sign In</NavLink></li> */}
                    <li><Button  color="secondary" onClick={handleClickOpen}>
        {state}
      </Button></li>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Have a Google Account?"}
        </DialogTitle>
        <DialogActions>
          <GoogleLogin
            clientId="992798065124-l39cdadgtpb6l4ikt8nf4m909vspjnr0.apps.googleusercontent.com"
            buttonText="Sign In With Google"
            onSuccess={responseGoogle}
            onFailure={failedLogin}
            cookiePolicy={"single_host_origin"}
          />
        </DialogActions>
      </Dialog>
                    <hr></hr>
                        
                </ul>
            </nav>
        );
    }

export default Navbar;