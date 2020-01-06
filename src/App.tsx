import React from 'react';
import './App.css';

import { StudentListComponent } from './pages/student-list';
import { LoginContainer } from './pages/login';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Login App</header>
      <main>
        <LoginContainer />
        <StudentListComponent />
      </main>
    </div>
  );
};

export default App;
