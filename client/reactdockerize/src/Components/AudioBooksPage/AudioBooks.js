import React from 'react';
import AudioBooksCategoryAccordion from './AudioBooksCategoryAccordion'

class Books extends React.Component{
    
    render(){
        return(

            <div>
            {console.log("INSIDE AUDIO BOOKS PAGE")}
                <AudioBooksCategoryAccordion/>
                
            </div>
        )
    }
}
export default Books;
