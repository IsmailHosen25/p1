import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Web/Global/Nav/Nav'
import Home from './Web/Home/Home'

function App() {


  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
