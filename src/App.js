import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Main from './layouts/Main';
import Doctor from './pages/Doctor';
import Patient from './pages/Patient';
import Admin from './pages/Admin';
import About from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Main>
          <Routes>
            <Route exact path="home" element={<Home/>} />
            <Route exact path="admin" element={<Admin/>} />
            <Route exact path="doctor" element={<Doctor/>} />
            <Route exact path="patient" element={<Patient/>} />
            <Route exact path="about" element={<About/>} />
            <Route exact path="contact" element={<ContactUs />} />
          </Routes>
        </Main>
      </BrowserRouter>
      </div>  
  );
}


