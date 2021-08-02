import React, { useState, useContext } from 'react';
import { data } from '../../data';

/**
 * NOTE:
 * removePerson compare this with prop drill logic and see
 * */

const PersonContext = React.createContext();
// NOTE: 2 componets -> Providers, Consumer
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((person) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h2>useContext </h2>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div className="item">
      <h3>{name}</h3>
      <button type="submit" onClick={() => removePerson(id)}>
        Remove
      </button>
    </div>
  );
};

export default ContextAPI;
