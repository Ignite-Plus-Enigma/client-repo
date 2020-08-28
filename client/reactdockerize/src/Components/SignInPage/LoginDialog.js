import GoogleLogin from "react-google-login";
import {userContext} from "../../UserContext";
import React,{useContext} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function LoginDialog(){
    const [open, setOpen] = React.useState(true);
    const {id,setId} = useContext(userContext); 
    const handleClose = () => {
        setOpen(false);
    };
    function responseGoogle(response){
        console.log(response.profileObj);
        setOpen(false);
        const x = response.profileObj.googleId;
        setId(x);
    }
  
    function failedLogin(response){
        console.log("Login failed");
    }
    return(
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
    )
} 
