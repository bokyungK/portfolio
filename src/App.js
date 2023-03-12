import './App.css';
import Header from './components/Header.js';
import Contact from './components/Contact.js';
import Skills from './components/Skills.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="wrapper">
          <h1 className="title">Portfolio</h1>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Contact />}></Route>
            <Route path="skill" element={<Skills />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
