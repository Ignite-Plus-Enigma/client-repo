import React,{useState,useEffect} from 'react';
import Navbar from "../NavbarComponent/Navbar"
import axios from 'axios'
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import GoogleLogin from "react-google-login";
import '../FooterComponent/Footer.css'
import {userContext} from "../../UserContext"
function SavedBooks(props){
      const msg = useContext(userContext)
  alert(msg)
    const [open, setOpen] = React.useState(false);
    const [id,setId] = useState(" ")
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
        const email = response.profileObj.email;
        setId(email)
        console.log(email)
        console.log(id)
    }

    function failedLogin(response){
        setState("Sign In")
    }
    
    const fetchData = () => {
        console.log(props.location.pathname)
        // const uniqueId = props.location.pathname.split("/")[2]
        // console.log(uniqueId)
        const uniqueId = id;
        console.log()
        console.log(id)
        const mainCategoriesApiEndPoint = 'http://localhost:8050/api/v1/user/'+uniqueId+'/books'
        axios.get(mainCategoriesApiEndPoint)
        .then(response => response.data)
        .then((data) => {
            console.log(data);
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    if(state == "Sign In"){
        return(
            <div>
             <Button  color="secondary" onClick={handleClickOpen}>
        {state}
      </Button>
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

            </div>
        )
    }
    else{
        return(
            <h1>Hey user {name}</h1>
        )
           
        
    }
    }

export default SavedBooks;
