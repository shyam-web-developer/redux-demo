import React from 'react';

export class About extends React.Component{
    constructor(props) {
        super();
        this.state =
        {
            age:props.age
        }
    }
    onMakeOlder() {
        this.setState({
            age:this.state.age +1
        }, ()=>{
            this.props.onChildUpdate(this.state.age)
        })

    }
   
    render(){
        console.log(this.props);
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1> {"This is my About page"} </h1>
                        <p>Your age is {this.state.age}</p>
                    </div>
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick={() => this.onMakeOlder(this)}>Make me Older</button>
                    </div>
                </div>               
            </div>
        );
    }
}