import React from 'react';
import ListItem from './ListItem';

const PeopleList = (props) =>{
  const peopleNames = props.people.map((people) => {
    return <ListItem key={people} people={people} />
  });

  return (
    <ul className="col-md-4 list-group">
      {peopleNames}
    </ul>
  );
}

export default PeopleList;
