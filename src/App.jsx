import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Vans from './pages/Vans.jsx'

function App() {

  return (
    <BrowserRouter>
      <header>
        <Link to='/' className="site-logo">#VANLIFE</Link>
        <nav>
          <Link to='/about'>О нас</Link>
          <Link to='/vans'>Фургоны</Link>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
