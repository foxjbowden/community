import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions/actions_users';

class UserList extends Component {
  renderlist(){
    return this.props.users.map((user) => {
      return(
        <li
          key={user.id}
          onClick={() => this.props.selectUser(user)}
          className="list-group-item">
          {user.username}
        </li>
      );
    });
  }

  render(){
    return (
    <ul className="list-group col-sm-4">
      {this.renderlist()}
    </ul>
    );
  }
}

//state: returns object - glue between react and redux
//re-renders with state change with list
function mapStateToProps(state) {
  //props inside UserList
  return {
    users: state.users
  };
}

/*
USE ES6 VERSION BELOW
//returns props on UserList container
function mapDispatcToProps(dispatch){
  //when called, pass reults to reducers
  return bindActionCreators({ selectUser: selectUser }, dispatch);
}
*/

//take functions and Component and produces container
//needs to know about dispatch and make it available as a prop
export default connect(mapStateToProps, { selectUser })(UserList);
