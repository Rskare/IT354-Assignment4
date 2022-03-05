import React from 'react';
import { useState } from 'react'
import Add from './components/Add';
import Edit from './components/Edit'
import './style.css';

export default function App() {

  const [users, setUsers] = useState([
    {
      id: 1,
      user: 'Username',
      title: 'Title',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolores, velit est blanditiis, quo ducimus voluptatum fuga ipsum laboriosam quidem ut magni veritatis, optio neque quas tempora quisquam nihil ab',
    },
    {
      id: 2,
      user: 'Username',
      title: 'Title',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolores, velit est blanditiis, quo ducimus voluptatum fuga ipsum laboriosam quidem ut magni veritatis, optio neque quas tempora quisquam nihil ab',
    },
    {
      id: 3,
      user: 'Username',
      title: 'Title',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolores, velit est blanditiis, quo ducimus voluptatum fuga ipsum laboriosam quidem ut magni veritatis, optio neque quas tempora quisquam nihil ab',
    },
    {
      id: 4,
      user: 'Username',
      title: 'Title',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolores, velit est blanditiis, quo ducimus voluptatum fuga ipsum laboriosam quidem ut magni veritatis, optio neque quas tempora quisquam nihil ab',
    },
  ]);

  const deletePost = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div class="container">
        <div class="row">
          <Add />
          {users.length > 0 ? <Edit users={users} onDelete={deletePost}/> : 'No Users To Show'}
        </div>
    </div>
  );
}

export default App;
