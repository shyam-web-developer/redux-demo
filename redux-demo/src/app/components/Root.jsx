import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx'
import UserList from '../containers/user-list.jsx';
import UserDetails from '../containers/user-details.jsx';

const Root = () => (
    <div className="container">
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
               {/* <Header />
                <Main />*/}

                 <h2>User List</h2>
                <UserList />
                <hr />
                <h2>User Details</h2>
                <UserDetails />
            </div>
        </div>
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">                
            </div>
        </div>
    </div>
)

export default Root 