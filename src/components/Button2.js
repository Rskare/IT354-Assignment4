import React from 'react';

const Button2 = ({ user, onDelete }) => {
  return (
    <button
      type="button"
      class="float-end btn btn-secondary"
      onClick={() => onDelete(user.id)}
    >
      Delete Post
    </button>
  );
};

export default Button2;
