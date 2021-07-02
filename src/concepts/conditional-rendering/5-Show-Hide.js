import React, { useState } from 'react';
import GitHubProfiles from '../useEffect/3-useEffect-FetchData';

const TEXT_ONE = 'Show Profile';
const TEXT_TWO = 'Hide Profile';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  const [buttonTitle, setButtonTitle] = useState(`${TEXT_ONE}`);
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setShow(!show);
          if (show) {
            setButtonTitle(`${TEXT_ONE}`);
          } else {
            setButtonTitle(`${TEXT_TWO}`);
          }
        }}
      >
        {buttonTitle}
      </button>
      <div className="container">{show ? <GitHubProfiles /> : null}</div>
    </>
  );
};

export default ShowHide;
