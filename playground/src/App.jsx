import './App.css'
import Layout from './components/Layout/Layout'
import Main from './page/Main'
import About from './page/About'
import Contact from './page/Contact'
import { BrowserRouter, Route, Routes } from 'react-router'



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Main />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='dashboard' element={<h1>Dashboard Page sidebar</h1>}>
            <Route path='settings' element={<h1>Dashboard Settings Page</h1>} />
            <Route path='profile' element={<h1>Dashboard Profile Page</h1>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
