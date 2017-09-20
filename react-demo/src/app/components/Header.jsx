import React from 'react';

export class Header extends React.Component{
    render(){
        return(
            <nav className="container">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <ul>
                                <li><a href="#">Home</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
