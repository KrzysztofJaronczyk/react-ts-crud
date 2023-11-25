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
          {/* Pass the userId parameter */}
          <Route path="/user/:id" element={<UserDetails userId={1} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
