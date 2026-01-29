import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import IntroVideo from './components/IntroVideo';
import './App.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const PlaceGallery = lazy(() => import('./pages/PlaceGallery'));

// Loading component
const Loading = () => (
  <div className="h-screen w-full flex items-center justify-center bg-black text-oasis-gold font-serif text-xl">
    Loading Oasis...
  </div>
);

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroVideo onComplete={() => setShowIntro(false)} />}
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/journey/:id" element={<PlaceGallery />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
