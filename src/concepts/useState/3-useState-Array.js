import React, { useState } from 'react';
import { data } from '../../data';

const UseStateArray = () => {
  /**
   * NOTE: if we dont import useState we can code as below
   * const [people, setPeople] = React.useState(data);
   */
  const [people, setPeople] = useState(data);
  const [btnTtile, setBtnTtile] = useState('Delete All Itemz');
  const removeItem = (id_to_remove, status) => {
    console.log(`"Log Output" ~ file: 3-useState-Array.js ~ line 11 ~ removeItem ~ id_to_remove`, id_to_remove);
    let newPeople;
    if (status === 'Y') {
      // NOTE: original_array filter for each person match remove it, newPeopl will have data with id
      newPeople = people.filter((person) => person.id === id_to_remove);
    } else {
      //NOTE: original_array filter for each person match remove it, newPeopl will have all data except the id we want
      newPeople = people.filter((person) => person.id !== id_to_remove);
    }
    console.log(`"Log Output" ~ file: 3-useState-Array.js ~ line 14 ~ removeItem ~ newPeople`, newPeople);
    setPeople(newPeople);
  };
  return (
    // NOTE: React.Fragment can be written as "<></>"
    <React.Fragment>
      {/* NOTE: map is like for loop */}
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h3>{name}</h3>
            <button className="btn" onClick={() => removeItem(id)}>
              Delete This Item
            </button>
            <button className="btn" onClick={() => removeItem(id, 'Y')}>
              Delete All Except This
            </button>
          </div>
        );
      })}
      {/* NOTE: setPeople([]) we are empty it */}
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
          setBtnTtile('Reload Page');
        }}
      >
        {btnTtile}
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
