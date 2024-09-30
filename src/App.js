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
  const [scrollMenu, setScrollMenu] = useState('init');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setScrollMenu('scroll');
      } else {
        if (scrollMenu !== 'init') {
          setScrollMenu('no-scroll');
        }
      }

      const scrollTop = window.scrollY;
      const viewHeight = window.innerHeight;
      setPage(getPage(scrollTop, viewHeight));
    }
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollMenu])

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
