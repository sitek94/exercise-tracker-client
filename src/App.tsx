import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Container, Toolbar } from '@material-ui/core';
import { Nav, NavItemLink } from 'components/nav';

import NewUser from 'screens/new-user';
import AddExercise from 'screens/add-exercise';
import AllUsers from 'screens/all-users';
import ExerciseLog from 'screens/exercise-log';
import NotFound from 'screens/not-found';
import Home from 'screens/home';

function App() {
  return (
    <Container maxWidth="md">
      <Nav>
        <NavItemLink label="Home" to="/" />
        <NavItemLink label="New user" to="/new-user" />
        <NavItemLink label="All users" to="/users" />
        <NavItemLink label="Add exercise" to="/add-exercise" />
        <NavItemLink label="Exercise log" to="/log" />
      </Nav>
      <Toolbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/add-exercise" element={<AddExercise />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/log" element={<ExerciseLog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Container>
  );
}

export default App;
