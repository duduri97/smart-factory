import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ThreeScene from './components/three/ThreeScene'
import DashBoard from './pages/DashBoard'
import Template from './pages/Template'

export default function App() {
  console.log(import.meta.env.VITE_PUBLIC_URL)
  return (
    <>
      <Router basename={import.meta.env.VITE_PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<ThreeScene />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/template" element={<Template />} />
        </Routes>
      </Router>
    </>
  )
}
