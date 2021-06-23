// NOTE: rafce - shortcut to create the template
// NOTE: useState is named import so {useState}
import React, { useState } from 'react';

/**
 * REVIEW: Hooks
 * starts with 'use'
 * component must be uppercase 'UseStateBasic'
 * must in function/component body line 24
 * cannot call conditionally
 */

const UseStateBasic = () => {
  // NOTE: for references, useState(datatype,function) we access value as datatype, handler as function

  //   console.log(useState('Hi Shijo'));
  //   const value = useState(1)[0];
  //   const handler = useState(1)[1];
  //   console.log('Value', value);
  //   console.log('Handler', handler);

  //   NOTE: value, setValue
  //   on loading value will be from 'title' after click it will be from 'setTitle'
  const [title, setTitle] = useState('random title');
  const [btnTitle, setBtnTitle] = useState('Change Title');

  // NOTE: Function setting new title when clicked
  const changeTitle = () => {
    if (title === 'random title') {
      setTitle('New Title');
      setBtnTitle('Reset');
    } else {
      setTitle('random title');
      setBtnTitle('Change Title');
    }
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="submit" className="btn" onClick={changeTitle}>
        {btnTitle}
      </button>
    </React.Fragment>
  );
};

export default UseStateBasic;
