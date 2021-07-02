/**
 * NOTE:
 */

import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReurns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('Default');

  const getProfile = async () => {
    const response = await fetch(url);
    const user = await response.json();
    setUser(user);
  };

  useEffect(() => {
    //   have a function seperate
    // getProfile();
    // or define function inside via fetch
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      })
      .then((user) => {
        console.log('success');
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      }) //catch hold network issue not 404
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading..</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>Error..</h2>
      </div>
    );
  }
  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};

export default MultipleReurns;
