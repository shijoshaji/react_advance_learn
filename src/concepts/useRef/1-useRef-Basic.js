import React, { useEffect, useRef } from 'react';

/**
 * REVIEW:
 * useRef -> for uncontrolled inputs
 * Preserves Values
 * Does Not trigger re-render
 * target DOM elements
 */

const UseRefBasic = () => {
  const refContainer = useRef(null);

  const handleSumbit = (e) => {
    e.preventDefault();
    let name = refContainer.current.value;
    alert(`Hi, ${name} Good day!!`);
  };
  console.log(refContainer);

  useEffect(() => {
    console.log('useeffect');
    console.log(refContainer.current);
    // NOTE: focus is on this container when the page in loaded
    refContainer.current.focus();
  });
  return (
    <>
      <form action="" className="form" onSubmit={handleSumbit}>
        <div>
          <input type="text" placeholder="Enter First Name" required ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasic;
