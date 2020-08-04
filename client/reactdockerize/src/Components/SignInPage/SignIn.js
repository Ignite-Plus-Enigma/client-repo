import React,{useState} from 'react';
import GoogleLogin from "react-google-login"



function SignIn(){
    const [flag,setFlag] = useState(false)
    const [name,setName] = useState("")
 

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
    return <h1>Hello {name} </h1>
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