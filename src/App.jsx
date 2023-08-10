import { Suspense } from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import routes from './routes'
import Loader from './common/Loader'
import LeftSidebar from './components/sidebar/LeftSidebar'

export default function App() {
  return (
    <Router basename={import.meta.env.VITE_PUBLIC_URL}>
      <Routes>
        {routes.map(({ path, title, component: Component }) => (
          <Route
            path={path}
            key={title}
            element={
              <Suspense fallback={<Loader />}>
                <Component />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Router>
  )
}
