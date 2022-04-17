
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import hospital1 from './photo/hospital1.jpg';
import doctoricon1 from './photo/doctoricon1.jpg';
import patienticon1 from './photo/patienticon1.png';
import administrator1 from './photo/administrator1.jpg';
import Typing from "react-typing-animation";
import "../pages/home.css";


const Home = () => {
  return (
    <div className='container.fluid'>
      <div className='position-relative'>
        <img src={hospital1} alt='HOSPITAL PHOTO...' className='w-100 ' />
        <Typing speed={70} >
          <p className="typing-text"> " <b>ÇDO PACIENT MBAN MBRENDA VETES MJEKUN E TIJ.</b> " <em>- Norman Cousin.</em></p>
        </Typing>
        <div className='text-position'>
          <p className='fs-5'><b>Emergjenc?</b></p>
          <button type='button' className='btn btn-primary btn-lg'>Cakto Termin</button>
        </div>
      </div>
      <div className='container card-position d-flex justify-content-evenly'>
          <Card style={{ width: '18rem' }} className='shadow p-3 mb-5 bg-body rounded'>
            <Card.Img variant="top" src={administrator1} />
            <Card.Body>
              <Card.Title>Administrator</Card.Title>
              <Card.Text>
                Regjistrohu apo Kyqu si Administrator.
              </Card.Text>
              <Button variant="primary">Log In</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='shadow p-3 mb-5 bg-body rounded'>
            <Card.Img variant="top" src={doctoricon1} />
            <Card.Body>
              <Card.Title>Doktor</Card.Title>
              <Card.Text>
                Regjistrohu apo kyqu si Doktor.
              </Card.Text>
              <Button variant="primary">Log In</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='shadow p-3 mb-5 bg-body rounded'>
            <Card.Img variant="top" src={patienticon1} />
            <Card.Body>
              <Card.Title>Pacient</Card.Title>
              <Card.Text>
                Regjistrohu apo kyqu si Pacient.
              </Card.Text>
              <Button variant="primary">Log In</Button>
            </Card.Body>
          </Card>
      </div>
    </div>
  )
}

export default Home
