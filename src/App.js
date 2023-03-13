import './App.css';
import Header from './components/Header.js';
import Contact from './components/Contact.js';
import Stats from './components/Stats.js';
import Projects from './components/Projects.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="wrapper">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Contact />}></Route>
            <Route path="/stat" element={<Stats />}></Route>
            <Route path="/project" element={<Projects />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
