import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
      render(){
        if(!this.props.user){
          return <div>Select a user to view their profile.</div>;
        }

        return (
          <div>
            <h3>{this.props.user.username}</h3>
            <div>Name: {this.props.user.firstName}</div>
          </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetail);
