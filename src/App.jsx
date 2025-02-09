import './App.css';
import Navabr from './Components/Navabr';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Page Container
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Footer from './Components/Footer';


function App() {

  return (
    <div className='App-container'>
      <CssBaseline />
      <BrowserRouter>
        <Navabr />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
