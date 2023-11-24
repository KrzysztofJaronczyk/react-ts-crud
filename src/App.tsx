// src/App.tsx
import React from 'react';
import UserTable from './components/UserTable';

const App: React.FC = () => {
  return (
    <div>
      <h1>React TypeScript CRUD App</h1>
      <UserTable />
    </div>
  );
};

export default App;
