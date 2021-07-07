import React, { useState, useReducer } from 'react';
import Modal from './modal';

import { data } from '../../data';
import { reducer } from './reducer';

/**
 * REVIEW:
 * alternate to useState
 *
 */

const defaultState = {
  fruit: data,
  isModalOpen: false,
  modalContent: '',
};

const UseReducerBasic = () => {
  // NOTE: using useState no good when we have multiple feilds as we learned earlier
  // so we use reducer as alternate
  // const [showModal, setshowModal] = useState(false);
  // const [people, setPeople] = useState(data);

  const [name, setName] = useState('');
  const [itemCount, setItemCount] = useState([data.length]);
  const [state, dispatch] = useReducer(reducer, defaultState);

  //NOTE: reducer-> takes old state and gives back new state
  //    defaultState -> similar to default usestate value

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      // setshowModal(true);
      // NOTE: data.js has {id:'',name:''}
      // setPeople([...people, { id: new Date().getTime().toString(), name }]);
      // setName('');
      // NOTE: using Reducer to replace above logic
      // dispatch(action)-> we give action a type
      const newItem = { id: new Date().getTime().toString(), name };
      console.log(newItem);
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
      setItemCount(state.fruit.length + 1);
    } else {
      // setshowModal(true);
      // NOTE: using Reducer to replace above logic
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      {/*NOTE: we using reducer
       {showModal && <Modal />} */}
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
      <form action="" onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="Fruit">Enter Fruit Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button type="submit">Add Item</button>
        <p>
          Item Count: <b>{itemCount}</b>
        </p>
      </form>
      <section>
        {/* {people.map((each_person) => {
          const { id, name } = each_person;
          return (
            <div key={id} className="item">
              {name}
            </div>
          );
        })} */}

        {state.fruit.map((each_fruit) => {
          const { id, name } = each_fruit;
          return (
            <div key={id} className="item">
              <h3>{name}</h3>
              <button
                type="button"
                onClick={() => {
                  dispatch({ type: 'REMOVE_ITEM', payload: id });
                  setItemCount(state.fruit.length - 1);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default UseReducerBasic;
