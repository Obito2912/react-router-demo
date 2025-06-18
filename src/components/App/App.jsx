// App.jsx

import { Routes, Route } from 'react-router-dom'; // New import
import Dashboard from '../Dashboard/Dashboard'; // New import
import AboutMe from '../AboutMe/AboutMe';
import Reviews from '../Reviews/Reviews';
import Header from '../Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Wrap a Route component inside a Routes component
          and specify the path and element attributes as shown. */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route path="/reviews" element={<AboutMe />} />
      </Routes>
      <Routes>
        <Route path="/about-me" element={<Reviews />} />
      </Routes>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;