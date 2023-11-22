import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Menu from './Menu'
import Error from './Error'

function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
