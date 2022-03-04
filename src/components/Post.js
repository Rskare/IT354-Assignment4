import React from 'react';
import Button2 from './Button2';

const Post = ({ user }) => {
  return (
    <div class="row mb-3">
          <div class="col-4">
            <h4>{user.title}</h4>
          </div>
          <div class="col-8">
            <Button2 />
          </div>
          <div class="col-12">
            <p>By {user.user}</p>
            <p>{user.text}</p>
          </div>
        </div>
  );
};

export default Post;