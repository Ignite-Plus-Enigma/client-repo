import React, { Component,useState,useMemo, useEffect } from 'react';
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
import AudioSubcategoryTrial from "./Components/AudioBooksPage/AudioSubcategoryTrial"
import PdfSubcategoryTrial from "./Components/PDFBooksPage/PdfSubCategoryTrial"
import {userContext} from "./UserContext"
import PDFTrail from "./Components/PDFBooksPage/PDFTrial"

import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';

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
  const provideValue = useMemo(() => ({id,setId}),[id,setId]);
  const handleClickOpen = () => {
      if(id == null){
          setOpen(true);
      }
      else {
        setOpen(false);
          setId(null);
      }
    
  };

  useEffect(()=>{
    const data = localStorage.getItem('my-id')
    const data_name = localStorage.getItem('my-name')
    if(data){
      setId(JSON.parse(data));
    }
    if(data_name){
      setName(JSON.parse(data_name));
      
    }

  },[])

  useEffect(()=>{
    localStorage.setItem('my-id',JSON.stringify(id));
    localStorage.setItem('my-name',JSON.stringify(name));
  })
  

  const handleClose = () => {
    setOpen(false);
  };
  const [name,setName] = useState("")
  const [state, setState] = useState("Sign In")


  function handleLogOut(){
    setId(null)
    localStorage.setItem('my-id',JSON.stringify(id));
  }


  function responseGoogle(response){

      console.log(response.profileObj)
      setState("Sign Out")
      setName(response.profileObj.name)
      setOpen(false)
      const x = response.profileObj.googleId;
      setId(x)
      const saveUserEndPoint = "http://localhost:8050/api/v1/user/save"
  
      Axios.post(saveUserEndPoint,{
        "googleId":response.profileObj.googleId,
         "savedBooks":[],
         "role":"User"
      })
  }

  function failedLogin(response){
      setState("Sign In")
  }
  
 
    return (
      <div>
      {/* <PDFTrail/> */}
      <BrowserRouter>
     {/* {alert(id)} */}
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
                    {id ?<li>Hello, {name}</li>: null}
                    {/* <li><NavLink exact activeClassName="current" to="/SignIn/" aria-label="Signin Page" onClick ={handle}>Sign In</NavLink></li> */}
                    <li>{id === null ? <Button  color="secondary" onClick={handleClickOpen} className={classes.signinbutton}>
                      Sign In 
      </Button> : 
      <Button  color="secondary" onClick={handleLogOut} className={classes.signinbutton}>
      Sign Out 
</Button> }</li>
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
        <userContext.Provider value = {provideValue}>
        <Route exact path="/" component={Home}/>
          <Route path="/PDFBooks" component={Books}/>
          <Route path="/AudioBooks" component={AudioBooks}/>
          <Route path="/Saved" component={SavedBooks}/>
          <Route path="/Donate" component={Donate}/>
          <Route path="/SignIn" component={SignIn}/>
          <Route path="/SubCategory" component={SubCategory}/>
          <Route path="/PdfSubCategory" component={PdfSubcategoryTrial}/>
          <Route path="/AudioSubCategory" component={AudioSubcategoryTrial}/>
          {/* <Route path="/Audio" component={Audio}/> */}
          {/* <Route path="/AudioSubCategory" component={AudioSubCategory}/> */}
          <Route path="/Audio" render={(props) => <Audio googleId={id} {...props}/>}/>
          <Route path="/PDF" component={PdfFile}/>
          </userContext.Provider>
        </Switch>
      </div>
      </BrowserRouter>
      </div>
    );
  
}
export default App;