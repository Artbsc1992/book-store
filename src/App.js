import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Nav from './components/nav'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
      <Routes>
        
      </Routes>
    </Router>
  );
}

export default App;
