import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'; // New import

import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard'; // New import
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../AboutMe/Contact';
import Hobbies from '../AboutMe/Hobbies';
import MyStory from '../AboutMe/MyStory';
import AboutUs from '../AboutUs/AboutUs';
import SiteHistory from '../AboutUs/SiteHistory';
import SiteMission from '../AboutUs/SiteMission';
import PageNotFound from '../PageNotFound/PageNotFound';

import './App.css';

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://api.nomoreparties.co/emoji-critic-ens')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="App">
      <Header />
      {/* Wrap a Route component inside a Routes component
          and specify the path and element attributes as shown. */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route path='/reviews/:reviewId' element={<Review reviews={reviews} />} />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path='history' element={<SiteHistory />} />
          <Route path='mission' element={<SiteMission />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;