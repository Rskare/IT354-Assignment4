import React from 'react';

const Add = () => {
  return (
    <>
      <h1>React Blog</h1>
      <form>
        <div>
          <select class="form-select" aria-label="User select">
            <option selected>Select the user</option>
            <option value="1">1 - Leanne Graham</option>
            <option value="2">2 - Ervin Howell</option>
            <option value="3">3 - Clementine Bauch</option>
          </select>
        </div>
        <div>
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
        <div>
          <label for="contentInput" class="form-label">
            Blog Post
          </label>
          <textarea class="form-control" id="contentInput" rows="3"></textarea>
        </div>
        <div>
          <button type="submit" class="btn btn-primary">
            New Post
          </button>
        </div>
      </form>
    </>
  );
};

export default Add;
