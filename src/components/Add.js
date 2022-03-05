import React from 'react';
import Button from './Button';
import { useState } from 'react';

const Add = ({ onAdd }) => {
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add text');
      return;
    }

    onAdd({ userId, title, text });

    setUserId('');
    setTitle('');
    setText('');
  };

  return (
    <div class="col-md-6 mb-4">
      <h1>React Blog</h1>

      <form action="" className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <div class="mb-2">
            <select class="form-select" aria-label="User select">
              <option selected>Select the user</option>
              <option value="1">1 - Leanne Graham</option>
              <option value="2">2 - Ervin Howell</option>
              <option value="3">3 - Clementine Bauch</option>
            </select>
          </div>
          <div class="mb-2">
            <label for="postTitle" class="form-label">
              Post Title
            </label>
            <input
              type="text"
              class="form-control"
              id="postTitle"
              aria-describedby="Help"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="contentInput" class="form-label">
              Blog Post
            </label>
            <textarea
              class="form-control"
              id="contentInput"
              rows="3"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>

          <div>
            <Button />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
