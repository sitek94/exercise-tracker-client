import * as React from 'react';

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
        <a href="#new-user">New user</a>
        <a href="#add-exercise">Add exercise</a>
        <a href="#users">All users</a>
        <a href="#log">Exercise log</a>
      </nav>

      <main>
        <NewUser />
        <AddExercise />
        <AllUsers />
        <ExerciseLog />
      </main>
    </div>
  );
}

function NewUser() {
  return (
    <section>
      <h2>New User</h2>
    </section>
  );
}

function AddExercise() {
  return (
    <section>
      <h2>Add Exercise</h2>
    </section>
  );
}

function AllUsers() {
  return (
    <section>
      <h2>All Users</h2>
    </section>
  );
}

function ExerciseLog() {
  return (
    <section>
      <h2>Exercise Log</h2>
    </section>
  );
}

export default App;
