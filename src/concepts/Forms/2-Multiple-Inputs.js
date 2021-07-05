import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

/**REVIEW:
 * refactor code of controlled inputs
 */

const MultipleInput = () => {
  // NOTE: this approach is not good if we have many feild so commenting it
  //   const [firstName, setFirstName] = useState('');
  //   const [lastName, setLastName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [age, setAge] = useState('');

  // NOTE: refacotred version of above, in object wise

  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
  });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // person-> old data, [name] the one in input feild which identifies from which feild it is
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { ...person, id: uuidv4() };
    // TODO: try email exist or not before setPeople
    const emailValidation = newPerson.email;
    setPeople([...people, newPerson]);
    alert('Thanks');
    setPerson({
      firstName: '',
      lastName: '',
      email: '',
      age: '',
    });
  };
  return (
    <>
      <article>
        {/* NOTE: Submit form can be done on form via onSubmit={submitHandler} or 
        via button onClick={submitHandler} */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="fName">First Name:</label>
            <input
              type="text"
              name="firstName"
              id="fName"
              placeholder="Please Enter First Name"
              required
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              id="lName"
              placeholder="Please Enter Last Name"
              required
              value={person.lastName}
              onChange={handleChange}
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
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Please Enter Age"
              required
              value={person.age}
              min="18"
              max="65"
              onChange={handleChange}
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
          const { id, firstName, lastName, email, age } = each_person;
          return (
            <div className="item" key={id}>
              <h5>
                {firstName} | {lastName} | {email} | {age}
              </h5>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MultipleInput;
