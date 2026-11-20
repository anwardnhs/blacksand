import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from './theme';
import LoadingIntro from './components/LoadingIntro';
import Header from './components/Header';
import Home from './pages/Home';
import AboutPage from './pages/About';
import FounderProfile from './pages/FounderProfile';
import OperationsPage from './pages/Operations';
import LeadershipPage from './pages/Leadership';
import Sustainability from './pages/Sustainability';
import InvestorsPage from './pages/Investors';
import Contact from './pages/Contact';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleAnimationComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <Provider>
      {!loadingComplete && <LoadingIntro onAnimationComplete={handleAnimationComplete} />}
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/founder-profile" element={<FounderProfile />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/operations" element={<OperationsPage />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
