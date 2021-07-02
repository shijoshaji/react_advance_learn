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
import Setup from './concepts/conditional-rendering/5-Show-Hide';

function App() {
  return (
    <div className="container">
      {/* NOTE: calling setup component from concepts i'm learning */}
      <Setup />
    </div>
  );
}

export default App;
