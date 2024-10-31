import React from 'react';
import './App.css';
import { Course } from '../../constants';

interface AppProps {
  courses: Array<Course>
}

function App({courses} : AppProps) {
  return (
    <p>Hello</p>
  );
}

export default App;
