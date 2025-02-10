import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
// Page Container
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
// Components
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ServicesPage from './Pages/ServicesPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import Home from './Components/Home';
import BlogDetails from './Components/BlogDetails';
import SearchBlog from './Components/SearchBlog';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className='App-container'>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/blog-detail' element={<BlogDetails />} />
            <Route path='/search-blog' element={<SearchBlog />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
