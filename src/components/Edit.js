import React from 'react';
import Post from './Post';

const Edit = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <Post user={user} />
      ))}
    </>
  );
};

export default Edit;
