import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Vans from './pages/Vans.jsx'
import VanDetail from './pages/VanDetail.jsx'
import Layout from './components/Layout.jsx'
import Dashboard from './pages/Host/Dashboard.jsx'
import Income from './pages/Host/Income.jsx'
import Reviews from './pages/Host/Reviews.jsx'
import HostLayout from './components/HostLayour.jsx'
import HostVans from './pages/Host/HostVans.jsx'
import HostVansDetail from './pages/Host/HostVansDetail.jsx'
import HostVanInfo from './pages/Host/HostVanInfo.jsx'
import HostVanPricing from './pages/Host/HostVanPricing.jsx'
import HostVanPhoto from './pages/Host/HostVanPhoto.jsx'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />
          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVansDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path='pricing' element={<HostVanPricing />} />
              <Route path='photo' element={<HostVanPhoto />} />
            </Route>

            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
