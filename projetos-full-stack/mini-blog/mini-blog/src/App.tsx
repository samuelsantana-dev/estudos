import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages
import { Home } from './pages/home/Home'
import { About } from './pages/about/About'
//components
import { Footer } from './components/footer'
import { NavBar } from './components/navbar'
import { Login } from './pages/login/login'
import { Register } from './pages/register/register'


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
