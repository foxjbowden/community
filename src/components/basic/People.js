import React, { Component } from 'react';
//import SearchBar from './SearchBar.js';
import PeopleList from './PeopleList.js';

//Data
const people = ['Bob', 'Julie', 'Jerry'];

export default class App extends Component {
  constructor(props){
    //calls the parent method
    super(props);

    this.state = { people };
    console.log(this.state.people);

    //this.searchPeople('Bob');

  }

 /*
	  searchPeople(term){
    this.setState({
      people: people
    })
  }
  */

  render(){
    return (
	//<SearchBar onSearchTermChange={term => this.searchPeople(term)} />
    <div>
      <PeopleList people={this.state.people} />
    </div>
    );
  }
}
