import React from 'react';
// NOTE: calling concepts here
// REVIEW: useState - changing state of the component
// import Setup from './concepts/useState/1-error-example';
// import Setup from './concepts/useState/2-useState-Basic';
// import Setup from './concepts/useState/3-useState-Array';
// import Setup from './concepts/useState/4-useState-Object';
// import Setup from './concepts/useState/5-useState-Counter';

// REVIEW: useEffect -
// import Setup from './concepts/useEffect/1-useEffect-Basics';
// import Setup from './concepts/useEffect/2-useEffect-Cleanup';
import Setup from './concepts/useEffect/3-useEffect-FetchData';

function App() {
  return (
    <div className="container">
      {/* NOTE: calling setup component from concepts i'm learning */}
      <Setup />
    </div>
  );
}

export default App;
