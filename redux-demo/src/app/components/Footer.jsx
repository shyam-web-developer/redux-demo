import React from 'react';

export class Footer extends React.Component{    
    render(){        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1> {"This is my Footer page"} </h1>
                        {/*<p>Your age is {this.state.age}</p>*/}
                    </div>                    
                </div>               
            </div>
        );
    }
}