import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
  const [resource, setResource] = useState('users');

  const onClickButton = (e) => {
      setResource(e);
  }
  return (
    <div className="ui container">
      <div>
        <button onClick={() => onClickButton('users')}>Users</button>
        <button onClick={() => onClickButton('posts')}>Posts</button>
        <button onClick={() => onClickButton('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
}

export default App;
