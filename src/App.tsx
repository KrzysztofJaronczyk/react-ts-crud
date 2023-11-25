// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserTable from './components/UserTable';
import UserDetails from './components/UserDetails';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>React TypeScript CRUD App</h1>
        <Routes>
          <Route path="/" element={<UserTable />} />
          {/* Use the :id parameter from the URL */}
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
