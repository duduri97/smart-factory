import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

import ThreeScene from './components/three/ThreeScene'
import DashBoard from './pages/DashBoard'
import Template from './pages/Template'

export default function App() {
  return (
    <>
      <Router basename={import.meta.env.VITE_PUBLIC_URL}>
        <Link to="/dashboard">dashboard</Link>
        <Routes>
          <Route path="/" element={<ThreeScene />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/template" element={<Template />} />
        </Routes>
      </Router>
    </>
  )
}
