import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import NewUser from 'screens/new-user';
import AddExercise from 'screens/add-exercise';
import AllUsers from 'screens/all-users';
import ExerciseLog from 'screens/exercise-log';

function App() {
  React.useEffect(() => {
    fetch('http://localhost:5000/api/exercise/users').then(res => {
      console.log(res);
    });
  }, []);

  return (
    <div className="container">
      <h1>Exercise tracker</h1>
      <nav>
        <Link to="/new-user">New user</Link>
        <Link to="/add-exercise">Add exercise</Link>
        <Link to="/users">All users</Link>
        <Link to="/log">Exercise log</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/add-exercise" element={<AddExercise />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/log" element={<ExerciseLog />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
