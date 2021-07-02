import React, { useState } from 'react';

/**
 * NOTE:
 *  Short Circuit - cant have if condidion as return, react doesnt allow so we use short circuit approach
 *  Ternary Operator
 */

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const fval = text || 'Hello';
  const sval = text && 'hello';
  return (
    <>
      {/* NOTE: using variable fval, sval */}
      <h2>OR operator: => {fval}</h2>
      <h2>AND operator: => {sval}</h2>
      <h1>***************</h1>
      {/* NOTE: using react 
      OR: text or default value
      AND: if true then return element */}
      <h2>OR: {text || 'Shijo'}</h2>
      <h2>AND: {text && 'Shijo'}</h2>
      {text && <h2>Shijo</h2>}
      {!text && <h2>Not Text</h2>}
    </>
  );
};

export default ShortCircuit;
