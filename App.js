import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const login = async (username, password) => {
    const res = await axios.post('http://<backend-url>/login', { username, password });
    setToken(res.data.token);
    localStorage.setItem('token', res.data.token);
  };

  const register = async (username, password) => {
    await axios.post('http://<backend-url>/register', { username, password });
  };

  const createTask = async (title, description, file) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (file) formData.append('file', file);
    await axios.post('http://<backend-url>/tasks', formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  // Add similar functions for getTasks, updateTask, deleteTask

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {/* Render login component */}
        </Route>
        <Route path="/register">
          {/* Render register component */}
        </Route>
        <Route path="/tasks">
          {/* Render tasks component */}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;