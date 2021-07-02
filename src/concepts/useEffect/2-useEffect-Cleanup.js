import React, { useState, useEffect } from 'react';
/** NOTE:
 *  for every re-render theres a call to useeffect,
 * once a useeffect is called for next rerender we cleanup first before calling useeffect again
 */
const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log(`useeffect ${size}`);
    window.addEventListener('resize', checkSize);
    return () => {
      //   cleanup logic
      console.log(`cleanup useeffect ${size}`);
      window.removeEventListener('resize', checkSize);
    };
  });
  console.log('Render');
  return (
    <div>
      {/* NOTE: after each time we change windows size we need to refresh/reload page to get updated value 
      To overcome that we use useEffect so when wver their's a change its get auto updated*/}
      <h3>Window Size: {size} px</h3>
    </div>
  );
};

export default UseEffectCleanUp;
