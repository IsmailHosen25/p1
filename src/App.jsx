import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Web/Global/Nav/Nav'
import Home from './Web/Home/Home'
import Galary from './Web/Galary/Galary'
import About from './Web/About/About'
import Certificate from './Web/Certificate/Certificate'

function App() {


  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/galary' element={<Galary/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/certificate' element={<Certificate/>}/>
    </Routes>
    </>
  )
}

export default App
