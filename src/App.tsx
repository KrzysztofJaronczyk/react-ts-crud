import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserTable from './components/PostList';
import PostList from './components/PostList';

const App: React.FC = () => {
  return (
    <div>
      <h1>React TypeScript CRUD App</h1>
      <PostList />
          </div>
  );
};

export default App;
