import './App.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import { useState, useEffect } from 'react';

function App() {
  const [scrollMenu, setScrollMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 62) setScrollMenu(true);
      else setScrollMenu(false);
    };
  
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
          <div className="wrapper">
            <Header scrollMenu={scrollMenu} />
            <Home />
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
