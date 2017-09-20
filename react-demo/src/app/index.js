import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header.jsx';
import { Home } from './components/Home.jsx';
import { About } from './components/About.jsx';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age: 27
        }
    }
    updateMyAge(age){
        this.setState({
            age
        })
    }
    render(){
        var user={
            name : "Anna",
            hobbies : ["Sports","Football"]
        };
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Hello </h1>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>                    
                </div>  
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Max"} age={this.state.age} user={user} >
                            <p>This is Paragraph </p>
                        </Home>
                    </div>                    
                </div>  
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <About age={this.state.age} onChildUpdate = {(age)=> this.updateMyAge(age)} />                            
                    </div>                    
                </div>             
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));