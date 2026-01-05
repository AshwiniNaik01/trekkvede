import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ Use BrowserRouter
import "./App.css";
import Layout from "./components/layout/Layout";
import Hero from "./components/hero/Hero";
import HomePage from "./pages/home/HomePage";
import TrackPage from "./pages/TrackPage";
import TrekGallery from "./components/track/TrekGallery";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wrapper */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> {/* Home page */}
        </Route>
        <Route path="/track" element={<Layout />}>
          <Route index element={<TrackPage />} />
        </Route>
        <Route path="/trek-gallery" element={<TrekGallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
