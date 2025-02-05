import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Faq from './pages/Faq';
import Header from './Components/Header';
import Gallery from './pages/Gallery';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Функция для проверки ширины экрана
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 480);
  };

  // Слушаем изменения размера экрана
  useEffect(() => {
    handleResize(); // Устанавливаем начальное состояние
    window.addEventListener('resize', handleResize); // Добавляем слушатель на изменение размера

    return () => {
      window.removeEventListener('resize', handleResize); // Очистка при размонтировании
    };
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Добавляем проверку, если экран больше 480px, редиректим на главную */}
        <Route path='/gallery' element={isMobile ? <Gallery /> : <Navigate to="/" />} />
        <Route path='/faq' element={<Faq />} />
        <Route path="*" element={<div className='error'>
          <div className="error-image">
            <img src="./images/error.svg" alt="404" />
          </div>
          <div className="error-txt">
            <h1>Bu səhifə mövcud deyil.</h1>
            <h1>Əsas səhifəyə qayıdın.</h1>
          </div>
        </div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
