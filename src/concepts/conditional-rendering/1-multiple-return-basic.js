/**
 * NOTE: Mutiple returns we can have but it return only one return, we need to have contidion to decide
 * which to return
 * Eg, have 2 return, without condition, the first return is returned
 */

import React, { useState, useEffect } from 'react';

// NOTE: importing components to show we can return component as mutiple returns
import CounterApp from '../useState/5-useState-Counter';
import GitHubProfiles from '../useEffect/3-useEffect-FetchData';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReurns = () => {
  // NOTE: to show component can be used as returns
  const [loading, setLoading] = useState(true);
  if (loading) {
    return <CounterApp />;
  } else {
    return <GitHubProfiles />;
  }
};

export default MultipleReurns;
