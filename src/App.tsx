// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserTable from './components/UserTable';
import UserDetails from './components/UserDetails';
import PostList from './components/PostList'; // Import the PostList component

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>React TypeScript CRUD App</h1>
        <Routes>
          <Route path="/" element={<UserTable />} />
          <Route path="/user/:id" element={<UserDetails />} />
          {/* Add a new route for displaying posts */}
          <Route path="/user/:id/posts" element={<PostList  />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
