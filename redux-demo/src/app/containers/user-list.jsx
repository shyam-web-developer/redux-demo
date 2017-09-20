import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index.jsx'
import UserDetail from './user-details.jsx'

class UserList extends Component {
    renderList() {
        return this.props.users.map((user) => {
            return (
                <li key={user.id}>
                    {user.first} {user.last} <button onClick={() => this.props.selectedUser(user)}>click</button>
                   {/* <img src={user.thumbnail} />
                    <h3>Age: {user.age}</h3>
                    <h3>Description: {user.description}</h3>
                    <h4> Hobbies </h4>
                    <ul>{user.hobbies && user.hobbies.length > 0 ? user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>) : ''} </ul>*/}

                    <UserDetail item={user} />

                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

// Get apps state and pass it as props to UserList
// whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// Get actions and pass them as props to to UserList
// now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectedUser: selectUser }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
