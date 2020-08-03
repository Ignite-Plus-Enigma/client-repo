import React,{useState} from 'react';
import GoogleLogin from "react-google-login"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from "../HomePage/Browse"
import history from "history"
import "./signin.css"
import { useHistory } from "react-router-dom";



const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color:"crimson",
  },
  pos: {
    marginBottom: 12,
  },
});



function SignIn(){
    const [flag,setFlag] = useState(false)
    const [name,setName] = useState("")
    const classes = useStyles();
    let history = useHistory();


    function handleClick(){
        history.push("/")
    
    }
 

    function responseGoogle(response){
        console.log(response.profileObj)
        setFlag(true)
        setName(response.profileObj.name)
    }

    function failedLogin(response){
        console.log("Failed")
        flag = false;
    }

    if(flag == true){

        const bull = <span className={classes.bullet}>•</span>;

        return (
            <section id="login-success">
            <Card className={classes.root}>
              <CardContent>
               
                <Typography variant="h3" component="h3" color="crimson">
                  You have successfully Logged In
                </Typography>
                
                <Typography variant="h4" component="h4">
                Hello {name}!
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" variant="outlined" color="primary" onClick={handleClick}>Continue Browsing</Button>
              </CardActions>
            </Card>
            </section>
          );
    }
    else{
        return(
            <div>
                <section>
                <GoogleLogin
                clientId="992798065124-l39cdadgtpb6l4ikt8nf4m909vspjnr0.apps.googleusercontent.com"
                buttonText="Sign In With Google"
                onSuccess={responseGoogle}
                onFailure={failedLogin}
                cookiePolicy={'single_host_origin'}
                />
                </section>
            </div>
        )
        
    
}
}

export default SignIn;