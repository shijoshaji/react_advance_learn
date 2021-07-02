import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

// second argument

const UseEffectFetchData = () => {
  const [profiles, setProfiles] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    // console.log('users', users);
    setProfiles(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h3>Github Profiles</h3>
      <ul className="users">
        {profiles.map((each_profile) => {
          const { id, login, avatar_url, html_url } = each_profile;
          return (
            <li key={id}>
              <img src={avatar_url} alt="" />
              <div>
                <h3>{login}</h3>
                <a href={html_url} target="_blank" rel="noreferrer">
                  View Profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectFetchData;
