import React from 'react';

export class Home extends React.Component{
    constructor(props) {
        super();       
    }
   
    render(){
        console.log(this.props);
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1> {"This is my Home page"} </h1>
                        <p>Your name is {this.props.name}, Your age is {this.props.age}</p>
                    </div> 
                    <div className="col-xs-10 col-xs-offset-1">
                        <h4> Hobbeies </h4>
                        <ul>{this.props.user.hobbies.map((hobby,i)=> <li key={i}>{hobby}</li>)} </ul>
                    </div>   
                    <hr/>       
                    {this.props.children}        
                </div>               
            </div>
        );
    }
}
Home.propTypes ={
    name : React.PropTypes.string,
    age  : React.PropTypes.number,
    user : React.PropTypes.object
}

