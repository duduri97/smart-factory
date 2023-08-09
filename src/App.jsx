import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ThreeScene from './components/three/ThreeScene'
import DashBoard from './pages/DashBoard'
import Template from './pages/Template'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/smart-factory/" element={<ThreeScene />} />
          <Route path="/smart-factory/dashboard" element={<DashBoard />} />
          <Route path="/smart-factory/template" element={<Template />}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}
