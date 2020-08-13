import React, { Component,useState } from 'react';
import Navbar from './Components/NavbarComponent/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Components/HomePage/Browse'
import Books from './Components/PDFBooksPage/Books'
import AudioBooks from './Components/AudioBooksPage/AudioBooks'
import PdfFile from './Components/PDFBooksPage/PdfFile'
import SavedBooks from './Components/SavedBooksPage/SavedBooks'
import SignIn from './Components/SignInPage/SignIn'
import Donate from './Components/DonatePage/Donate'
import './App.css'
import '../src/Components/FooterComponent/Footer.css'
import SubCategory from "./Components/PDFBooksPage/SubCategory"
import Audio from "./Components/AudioBooksPage/Audio"
import AudioSubCategory from './Components/AudioBooksPage/AudioSubCategory';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import GoogleLogin from "react-google-login";
import {NavLink} from 'react-router-dom';
import logo from './Components/NavbarComponent/logo.png'
import Search from './Components/NavbarComponent/Search'
import "./Components/NavbarComponent/Navbar.css"
import {userContext} from "./UserContext"
import AudioSubcategoryTrial from './Components/AudioBooksPage/AudioSubcategoryTrial';
import PdfSubcategoryTrial from './Components/PDFBooksPage/PdfSubCategoryTrial';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    // maxWidth: 280,
    // height :350,
    // alignContent:"left"
  },
  signinbutton: {
    padding: 0,
    right: 0,
    position: "absolute",
    border: "1px solid crimson"
  }
  });

function App() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [id,setId] = useState(null)
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
  const [name,setName] = useState("")
  const [state, setState] = useState("Sign In")


  function responseGoogle(response){
      console.log(response.profileObj)
      setState("Sign Out")
      setName(response.profileObj.name)
      setOpen(false)
      const x = response.profileObj.googleId;
      setId(x)
  }

  function failedLogin(response){
      setState("Sign In")
  }
  
 
    return (
      <BrowserRouter>
      <div className="App">
        {/* <Navbar/> */}
        <nav className="app">
                
                <ul>
                    <img src={logo} alt="logo" width="170" height="100"/>
                    <li><NavLink exact activeClassName="current" to='/' aria-label="Home">Home</NavLink></li>
                    <li><NavLink exact activeClassName="current" to="/PDFBooks/" aria-label="PDF Books" >Books</NavLink></li>
                    <li><NavLink exact activeClassName="current" to="/AudioBooks/" aria-label="AudioBooks">Audio Books </NavLink></li>
                    <li><NavLink exact activeClassName="current" to="/Saved" aria-label="Saved Books">Saved </NavLink></li>
                    <li><Search/></li>
                    <li> <a href ="https://www.samarthanam.org/donate/">Donate</a></li>
                    {name ?<li>Hello, {name}</li>: null}
                    {/* <li><NavLink exact activeClassName="current" to="/SignIn/" aria-label="Signin Page" onClick ={handle}>Sign In</NavLink></li> */}
                    <li><Button  color="secondary" onClick={handleClickOpen} className={classes.signinbutton}>

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
                    
                        
                </ul>
                <hr id= "horizontal-ruler"></hr>
            </nav>
        <Switch>
        <userContext.Provider value = {id}>
          <Route exact path="/" component={Home}/>
          <Route path="/PDFBooks" component={Books}/>
          <Route path="/AudioBooks" component={AudioBooks}/>
          <Route path="/Saved" component={SavedBooks}/>
          <Route path="/Donate" component={Donate}/>
          <Route path="/SignIn" component={SignIn}/>
          <Route path="/SubCategory" component={SubCategory}/>
          <Route path="/PdfSubCategory" component={PdfSubcategoryTrial}/>
          <Route path="/AudioSubCategory" component={AudioSubcategoryTrial}/>
          <Route path="/Audio" component={Audio}/>
          <Route path="/PDF" component={PdfFile}/>
          </userContext.Provider>
        </Switch>
      </div>
      </BrowserRouter>
    );
  
}
export default App;