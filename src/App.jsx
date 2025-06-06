import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import MannHouse from './pages/MannHouse.jsx'
import ScheyerHouse from './pages/ScheyerHouse.jsx'
import About from './pages/About.jsx'
import Navbar from './components/Navbar.jsx'
import Study from './pages/Study.jsx'
import LivingRoom from './pages/LivingRoom.jsx'
import Balcony from './pages/Balcony.jsx'
import BlueFour from './pages/BlueFour.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mann" element={<MannHouse />} />
        <Route path="/scheyer" element={<ScheyerHouse />} />
        <Route path="/about" element={<About />} />
        <Route path="/study" element={<Study />} />
        <Route path="/livingroom" element={<LivingRoom />} />
        <Route path="/bluefour" element={<BlueFour />} />
        <Route path="/balcony" element={<Balcony />} />
      </Routes>
    </Router>
  )
}

export default App