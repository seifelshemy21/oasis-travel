import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import './App.css';
// Lazy load pages
// Lazy load pages
const Home = lazy(() => import('./pages/Home'));



// Loading component
const Loading = () => (
  <div className="h-screen w-full flex items-center justify-center bg-black text-oasis-gold font-serif text-xl">
    Loading Oasis...
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
