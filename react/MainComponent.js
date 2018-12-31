import React, { Component } from 'react';
import UsersComponent from './UsersComponent';

export default class MainComponet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <h1>Users</h1>
        <UsersComponent/>
      </div>
    );
  }
}