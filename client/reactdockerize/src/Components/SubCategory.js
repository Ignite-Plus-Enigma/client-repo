import React from 'react';

class SubCategory extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <h1>{this.props.top}</h1>
                <h2>{this.props.lower}</h2>
                
            </div>
        )
    }
}
export default SubCategory;