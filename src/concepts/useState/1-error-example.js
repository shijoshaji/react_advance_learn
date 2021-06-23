// NOTE: rafce - shortcut to create the template
import React from 'react';

const ErrorExample = () => {
  // NOTE: even if we access title and change it to 'hey there' still we cant change h1
  let title = 'Random';
  const changeTitle = () => {
    console.log('BEFORE', title);
    title = 'hey there';
    console.log('AFTER', title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="submit" className="btn" onClick={changeTitle}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
