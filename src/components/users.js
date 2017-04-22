import React, { Component } from 'react';

import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';

export default class Users extends Component {
  render() {
    return(
      <div>
        <UserList />
        <UserDetail />
      </div>
    );
  }
}