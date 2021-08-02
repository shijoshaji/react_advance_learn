import React, { useState } from 'react';
import { data } from '../../data';

/**
 * NOTE:
 *  more components
 * fix - context api, redux (for more comples cases)
 * in below example we use function 'removePerson' which is oly needed in singleperson, but we need to pass this
 * method name as parameter, which is bad when we have more complex coponents to overcome this we use context-api, redux
 */
const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((person) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <div>
      <h2>prop drill</h2>
      <List people={people} removePerson={removePerson} />
    </div>
  );
};

const List = ({ people, removePerson }) => {
  console.log('shijo', people);
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} removePerson={removePerson} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  console.log('name', name);
  return (
    <div className="item">
      <h3>{name}</h3>
      <button type="submit" onClick={() => removePerson(id)}>
        Remove
      </button>
    </div>
  );
};

export default PropDrilling;
