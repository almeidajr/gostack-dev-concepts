import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import api from './services/api';

import './App.css';
import backgroundImage from './assets/background.jpg';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `New react project ${Date.now()}`,
      owner: 'José Rogério',
    });
    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />

      <img width={400} src={backgroundImage} alt="Light in black background" />

      <ul>
        {projects.map((project) => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add project</button>
    </>
  );
}

export default App;
