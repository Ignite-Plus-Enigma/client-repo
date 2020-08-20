import React from 'react';
import AllAudioCategories from '../AudioBooksPage/AllAudioCategories'
import AllCategoryTrial from './AllCategoryTrial';


class Books extends React.Component{
    
    render(){
        return(
            <div>
                {/* <AllAudioCategories/> */}
                <AllCategoryTrial/>
                
            </div>
        )
    }
}
export default Books;
