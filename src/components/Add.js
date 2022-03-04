import React from 'react';
import Button from './Button'

const Add = () => {
  return (
    <div class="col-md-6 mb-4">
      <h1>React Blog</h1>
      <form>
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
          />
        </div>
        <div class="mb-3">
          <label for="contentInput" class="form-label">
            Blog Post
          </label>
          <textarea class="form-control" id="contentInput" rows="3"></textarea>
        </div>

        <div>
          <Button />
        </div>
      </form>
    </div>
  );
};

export default Add;
