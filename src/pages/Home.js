
import React from 'react';
import { Container } from 'react-bootstrap';
import hospital1 from  './photo/hospital1.jpg';
import Typing from "react-typing-animation";
import "../pages/home.css";


const Home = () => {
  return (
    <div className='container.fluid'>
      <div className='position-relative'>
      <img src={hospital1} alt='HOSPITAL PHOTO...' className='w-100 '  />
      <Typing speed={70} >
         <p className="typing-text"> " <b>ÇDO PACIENT MBAN MBRENDA VETES MJEKUN E TIJ.</b> " <em>- Norman Cousin.</em></p>
        </Typing>
        <div className='text-position'>
          <p className='fs-5'><b>Emergjenc?</b></p>
          <button type='button' className='btn btn-primary btn-lg'>Cakto Termin</button>
        </div>
      </div>
    </div>
  )
}

export default Home
