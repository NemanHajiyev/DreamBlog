import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Page Container
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
//Page Container
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
//
import ServicesPage from './Pages/ServicesPage';
import AboutPage from './Pages/AboutPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import Home from './Components/Home'
import BlogDetails from './Components/BlogDetails';



function App() {

  return (
    <div className='App-container'>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/blogs' element={<BlogsPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/blog-detail' element={<BlogDetails />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
