import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ Use BrowserRouter
import './App.css';
import Layout from './components/layout/Layout';
import Hero from './components/hero/Hero';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wrapper */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> {/* Home page */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
