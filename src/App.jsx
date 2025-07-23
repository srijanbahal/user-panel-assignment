import React from 'react';
import UserPanel from './components/UserPanel';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <UserPanel />
    </div>
  );
}

export default App;