import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ThreeScene from './components/three/ThreeScene'
import DashBoard from './pages/DashBoard'
import Template from './pages/Template'

export default function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<ThreeScene />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/template" element={<Template />}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}
