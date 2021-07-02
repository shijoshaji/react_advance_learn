import React, { useState } from 'react';

/**
 * NOTE:
 *  Short Circuit - cant have if condidion as return, react doesnt allow so we use short circuit approach
 *  Ternary Operator
 */

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || 'No TEXT'}</h1>
      {isError && <h1>ERROR....</h1>}
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        Toggle Error
      </button>
      {/* Terrnary operator way */}
      {isError ? <p>There is Error</p> : <p>There is no Error</p>}
    </>
  );
};

export default ShortCircuit;
