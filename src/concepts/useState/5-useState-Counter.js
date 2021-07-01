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
  const delayTime = () => {
    setTimeout(() => {
      /** NOTE: after 5 sec we see the update, even if we click the button multiple times it will still
       * take the recent value and update since there was a timedelay
       * eg: we click 3 times expecting count to be 3, but reality is its just 1 since it was 0 before the click
       * setValue(value+1);
       * To over come this we use functional update
       */
      setValue((prevValue) => {
        return prevValue + 1;
      });
    }, 2000);
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
      <section>
        <button className="btn" onClick={delayTime}>
          Delay Concept
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
