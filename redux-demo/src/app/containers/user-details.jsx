import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.item
        }
    }
    render() {
        if (this.state.user && this.state.user.show) {
            return (<div> <h2>{this.state.user.first} {this.state.user.last}</h2></div>);
        }
        else if (this.props.user) {
            return (<div>
                <img src={this.props.user.thumbnail} />
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Description: {this.props.user.description}</h3>
                <h4> Hobbies </h4>
                <ul>{this.props.user.hobbies && this.props.user.hobbies.length > 0 ? this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>) : ''} </ul>
            </div>);
        }
        return (
            <div>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    console.log("mapStateToProps UserDetails:", state);
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
