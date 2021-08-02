import React from 'react';
// NOTE: calling concepts here
// Uncomment 1 lines to see the concept work

// REVIEW: useState - changing state of the component
// import Setup from './concepts/useState/1-error-example';
// import Setup from './concepts/useState/2-useState-Basic';
// import Setup from './concepts/useState/3-useState-Array';
// import Setup from './concepts/useState/4-useState-Object';
// import Setup from './concepts/useState/5-useState-Counter';

// REVIEW: useEffect -
// import Setup from './concepts/useEffect/1-useEffect-Basics';
// import Setup from './concepts/useEffect/2-useEffect-Cleanup';
// import Setup from './concepts/useEffect/3-useEffect-FetchData';

// REVIEW: Conditional Rendering
// import Setup from './concepts/conditional-rendering/1-multiple-return-basic';
// import Setup from './concepts/conditional-rendering/2-multiple-returns';
// import Setup from './concepts/conditional-rendering/3-Short-Circuit-Basic';
// import Setup from './concepts/conditional-rendering/4-Short-Circuit';
// import Setup from './concepts/conditional-rendering/5-Show-Hide';

// REVIEW: Forms
// import Setup from './concepts/Forms/1-Controlled-Inputs';
// import Setup from './concepts/Forms/2-Multiple-Inputs';

// REVIEW: useRef
// import Setup from './concepts/useRef/1-useRef-Basic';

// REVIEW: useReducer
// NOTE:here we dint specify the file unlike others, because in that folder we have index.js which gets called automatically
//import Setup from './concepts/useReducer/';

// REVIEW: Prop Drilling
// import Setup from './concepts/prop-drilling/propdrills'

// REVIEW: useContext -> overcome prop drill conccept
// import Setup from './concepts/useContext/1-useContext-Basic';

// REVIEW: custom-hooks
// import Setup from './concepts/custom-hooks/1-fetch-example';

// REVIEW: props types
import Setup from './concepts/props-types';

function App() {
  return (
    <div className="container">
      {/* NOTE: calling setup component from concepts i'm learning */}
      <Setup />
    </div>
  );
}

export default App;
