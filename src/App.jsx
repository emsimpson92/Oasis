import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import DiningPage from './pages/DiningPage';
import SpaWellnessPage from './pages/SpaWellnessPage';
import AccommodationsPage from './pages/AccommodationsPage';
import NightlifePage from './pages/NightlifePage';
import EventsPage from './pages/EventsPage';
import RecreationPage from './pages/RecreationPage';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dining" element={<DiningPage />} />
            <Route path="/wellness" element={<SpaWellnessPage />} />
            <Route path="/accommodations" element={<AccommodationsPage />} />
            <Route path="/nightlife" element={<NightlifePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/recreation" element={<RecreationPage />} />
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </ThemeProvider>
  )
}

export default App;