/**
 * NOTE:
 * By default runs after every re-render
 * cleanup function
 * second paramenter
 * we can have many useEffect
 */

// import useEffect
import React, { useState, useEffect } from 'react';

const UseEffectBasic = () => {
  // ANCHOR: Hooks
  //   useState
  const [value, setValue] = useState(0);

  // NOTE: every time i click on button rerenders a component, ie calls useEffect always
  useEffect(() => {
    console.log('useEffect');
    //   NOTE: as eg, we call useeffect based on condition ie update the title value > 5
    if (value > 5) {
      console.log('Called useEffect');
      document.title = `Count: ${value}`;
    }
    /**
     * NOTE: second parameter [] is dependency list
     *  if [] -> means it runs only once ie initial render
     *  if [value] -> rerenders when value changes
     *
     */
  }, [value]);
  console.log('Component Rendered');
  console.log('***********');

  //  ANCHOR: Functions
  const changeMessage = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <h2>{value}</h2>
      <button className="btn" onClick={changeMessage}>
        Click
      </button>
    </div>
  );
};

export default UseEffectBasic;
