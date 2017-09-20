
import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header>
        <nav className="container">
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>                            
                        </ul>
                    </div>
                    <hr />
                </div>
            </div>
        </nav>
    </header>
)

export default Header
