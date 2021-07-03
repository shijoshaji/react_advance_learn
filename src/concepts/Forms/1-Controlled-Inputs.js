import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

/**REVIEW:
 * JS:
 *  const input = document.getElementByID('mytext);
 *  const inputVlaue = input.value
 *
 * React:
 *  Value
 *  onChange:
 *
 * controlled input -> we hook to state values
 */

const ControlledInput = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const submitHandler = (e) => {
    // NOTE:  prevents from reloading/refresh page
    e.preventDefault();
    console.log('Submitted');
    // if key and variable are diff use this
    // const person = { FN: firstName, LN: lastName };
    // else

    const person = { id: uuidv4(), firstName, lastName, email };
    setPeople((people) => {
      return [...people, person];
    });
    setFirstName('');
    setLastName('');
    setEmail('');
    console.log(uuidv4());
  };
  return (
    <>
      <article>
        {/* NOTE: Submit form can be done on form via onSubmit={submitHandler} or 
        via button onClick={submitHandler} */}
        <form className="form" onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="fName">First Name:</label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="Please Enter First Name"
              required
              value={firstName}
              onChange={(e) => {
                console.log(e.target.value);
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lName">Last Name:</label>
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Please Enter Last Name"
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Please Enter Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </article>
      <section>
        <h2>List of people Added</h2>
        {people.map((each_person) => {
          const { id, firstName, lastName, email } = each_person;
          return (
            <div className="item" key={id}>
              <h5>
                {firstName} | {lastName} | {email}
              </h5>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ControlledInput;
