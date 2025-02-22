import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Home from './components/Home';

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
  const handleScroll = useCallback(() => {
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
  }, [scrollMenu])

  useEffect(() => {
    let timer;
    
    window.addEventListener('scroll', () => {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          handleScroll();
        }, 200)
      }
    });
  }, [handleScroll])

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
