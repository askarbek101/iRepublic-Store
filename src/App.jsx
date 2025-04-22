import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import TradeIn from './pages/TradeIn';
import IPhonePage from './pages/IPhonePage';
import MacPage from './pages/MacPage';
import IPadPage from './pages/IPadPage';
import WatchPage from './pages/WatchPage';
import AirPodsPage from './pages/AirPodsPage';
import UsedPage from './pages/UsedPage';
import ComparePage from './pages/ComparePage';
import AccessoriesPage from './pages/AccessoriesPage';

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="relative">
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Highlights />
              <Model />
              <Features />
              <HowItWorks/>
              <Footer/>
            </main>
          } />
          <Route path="/trade-in" element={<TradeIn />} />
          <Route path="/iphone" element={<IPhonePage />} />
          <Route path="/mac" element={<MacPage />} />
          <Route path="/ipad" element={<IPadPage />} />
          <Route path="/watch" element={<WatchPage />} />
          <Route path="/airpods" element={<AirPodsPage />} />
          <Route path="/used" element={<UsedPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
