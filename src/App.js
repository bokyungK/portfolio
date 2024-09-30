import './App.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import { useState, useEffect } from 'react';

const getPage = (scrollTop, viewHeight) => {
  const halfViewHeight = viewHeight / 2;
  if (scrollTop < halfViewHeight) {
    return 1;
  } else if (scrollTop < viewHeight + halfViewHeight) {
    return 2;
  } else {
    return 3;
  }
}

function App() {
  const [scrollMenu, setScrollMenu] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY >= 62) {
        setScrollMenu('scroll');
      } else {
        setScrollMenu('');
      }

      const scrollTop = window.scrollY;
      const viewHeight = window.innerHeight;
      setPage(getPage(scrollTop, viewHeight));
    }
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
          <div className="wrapper">
            <Header scrollMenu={scrollMenu} page={page} />
            <Home />
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
