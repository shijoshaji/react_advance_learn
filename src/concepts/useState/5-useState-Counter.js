// NOTE: will do basic counter app using useState concepts

import React, { useState } from 'react';

const UseStateCounter = () => {
  // NOTE: set default counter value
  const [value, setValue] = useState(0);
  const action = (val) => {
    if (val === '+') {
      setValue(value + 1);
    } else if (val === '-') {
      setValue(value - 1);
    }
  };
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h3>Counter App</h3>
        <h1>{value}</h1>
        <button className="btn" onClick={() => action('+')}>
          Increase (+)
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          RESET (0)
        </button>
        <button className="btn" onClick={() => action('-')}>
          Decrease (-)
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
