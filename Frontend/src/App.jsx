import './App.css'
import Body from './Components/Body'
import Cartpage from './Components/Cartpage'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return <>

    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Body/>} />
        <Route path='/cart' element={<Cartpage/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  
  </>
  
  
}

export default App
