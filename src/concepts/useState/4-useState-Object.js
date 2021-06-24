import React, { useState } from 'react';
// NOTE: Previous we passed as array of data, now we pass object in this example

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: 'Learn React',
    date: '24-Jun-21',
    source: 'Youtube',
    message: 'One hour a day',
  });
  const changeMessge = () => {
    /**NOTE:
     * setPeople('Hello Dude');  -> if i do this entire content gets cleared
     * setPeople({message:'Hey Dude!'}); -> if i do this way, except message all other iteams are cleared
     */

    // NOTE: To overcome above 2 problem we use spread opertor
    setPeople({ ...people, message: 'small steps are also progress' });
  };
  const changeAll = () => {
    setPeople({ name: 'Upskill', date: '365 days', source: 'Internet', message: 'Never Quit' });
  };

  return (
    <>
      <h4>{people.name}</h4>
      <p>{people.date}</p>
      <p>{people.source}</p>
      <h2>{people.message}</h2>
      <button className="btn" onClick={changeMessge}>
        Change Messsage
      </button>
      <button className="btn" onClick={changeAll}>
        Change All
      </button>
    </>
  );
};

export default UseStateObject;
