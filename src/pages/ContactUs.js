import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const ContactUs = () => {
  return (
    <div className="pt-4 bg-secondary text-black" >
      <Container>
        <Row>
          <Col lg="8">
            <h1 className="display-4 mb-4">Na Kontaktoni</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Qëndroni Në Kontakt</h3>
            <address>
              <h4>Email:</h4>
              <h6>al55544@ubt-uni.net</h6>
              <h6>dz52352@ubt-uni.net</h6>
              <br />
              <h4>Phone:</h4>
              <h6>+38345472620</h6>
              <h6>+38349924052</h6>
              <br />
              <h6>Projekti jone ne LAB Course 1 "Programim"!
                Per Kritika, Sygjerime, Pyetje, apo edhe Lavdata na kontaktoni!</h6>
            </address>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn btn-primary" type="submit">
                    Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs