import React from 'react';
import './App.css';

import { StudentListComponent } from './pages/student-list';
import { LoginComponent } from './pages/login';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Login App</header>
      <main>
        <LoginComponent />
        <StudentListComponent />
      </main>
    </div>
  );
};

export default App;
