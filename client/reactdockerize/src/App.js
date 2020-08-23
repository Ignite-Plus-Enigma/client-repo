import React, { Component,useState,useMemo, useEffect } from 'react';
import Navbar from './Components/NavbarComponent/Navbar';
import Footer from "./Components/FooterComponent/Footer"
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
import SearchGrid from "./Components/SearchResultPage/SearchGrid"

import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import UploadBooks from './Components/UploadPage/UploadBooks';
import EditBooks from './Components/EditPage/EditBooks'

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
  },
  name:{
    padding:0,
    right: "7em",
    top:"2em",
    position:"absolute"
  }
  });

function App() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [id,setId] = useState(null)
  const [role,setRole] = useState(null)
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
    const data_role = localStorage.getItem('my-role')
    if(data){
      setId(JSON.parse(data));
    }
    if(data_name){
      setName(JSON.parse(data_name));
      
    }
    if(data_role){
      setRole(JSON.parse(data_role));
    }

  },[])

  useEffect(()=>{
    localStorage.setItem('my-id',JSON.stringify(id));
    localStorage.setItem('my-name',JSON.stringify(name));
    localStorage.setItem('my-role',JSON.stringify(role))
  })
  

  const handleClose = () => {
    setOpen(false);
  };
  const [name,setName] = useState("")
  const [state, setState] = useState("Sign In")


  function handleLogOut(){
    setId(null)
    setRole(null)
    setName(null)
    localStorage.setItem('my-id',JSON.stringify(id));
    localStorage.setItem('my-name',JSON.stringify(name));
    localStorage.setItem('my-role',JSON.stringify(role));
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

      const getRoleOfUser = "http://localhost:8050/api/v1/user/" +response.profileObj.googleId +"/role"
      Axios.get(getRoleOfUser)
      .then(response => response.data)
      .then((data) => {
        console.log("USER Role")
          console.log(data)
          setRole(data)
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
        <nav className="app sticky">
                
                <ul>
                    <img src={logo} alt="logo" width="140" height="70"/>
                    <li><NavLink exact activeClassName="current" to='/' aria-label="Home">Home</NavLink></li>
                    <li><NavLink exact activeClassName="current" to="/PDFBooks/" aria-label="PDF Books" >Books</NavLink></li>
                    <li><NavLink exact activeClassName="current" to="/AudioBooks/" aria-label="AudioBooks">Audio Books </NavLink></li>
                    {role == "Admin" ?<li><div class="dropdown">
  <button class="dropbtn">Admin Rights</button>
  <div class="dropdown-content">
  <NavLink exact activeClassName="current" to="/Upload" aria-label="Saved Books">Upload Books </NavLink>
  <NavLink exact activeClassName="current" to="/Edit" aria-label="Saved Books">Edit Books </NavLink>
  </div>
</div></li> : <li><NavLink exact activeClassName="current" to="/Saved" aria-label="Saved Books">Saved </NavLink></li> }
                   {console.log("Role is")}
                   {console.log(role)}
                    <li><Search/></li>
                    {/* <li> <a href ="https://www.samarthanam.org/donate/">Donate</a></li> */}
                    {id ?<li className ={classes.name}>Hello, {name}</li>: null}
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
          <Route path="/Search" component={SearchGrid}/>
          <Route path="/Upload" component={UploadBooks}/>
          <Route path="/Edit" component={EditBooks}/>
          </userContext.Provider>
        </Switch>
      </div>
      </BrowserRouter>
      <Footer/>
      </div>
    );
  
}
export default App;