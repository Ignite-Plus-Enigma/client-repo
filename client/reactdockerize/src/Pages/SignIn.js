import React from 'react';
import Audio from '../Components/Audio'
import axios from 'axios';


class SignIn extends React.Component{




    render(){
        function handleClick(){
            console.log("i got clicked")
            const apiendpoint = 'http://localhost:8050/restricted'
            axios.get(apiendpoint)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            })
        }
        return(
            <button onClick = {handleClick}>Click here</button>
        )
    }
}
export default SignIn;