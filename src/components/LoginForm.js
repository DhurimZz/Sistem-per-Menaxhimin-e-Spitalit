import React from 'react'
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className='bg-light'>
      <div className='container min-vh-100'>
        <div className='min-vh-100 d-flex justify-content-center align-items-center'>
          <form className=' p-5 col-12 col-md-8 col-lg-6 row border bg-white position-relative rounded '>
            <div style={{ background: "-webkit-linear-gradient(left, #0072ff, #8811c5)", height: "5rem" }} className='text-white text-center position-absolute top-0 start-0 fs-3 d-flex justify-content-center align-items-center'></div>
            <div className='mt-5 pt-3 col-12 col-md-12 d-flex flex-column justify-content-start'>
              <label htmlFor="inputEmail4" className="form-label text-start">Email</label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="mt-4 col-12 col-md-12 d-flex flex-column justify-content-start ">
              <label htmlFor="inputPassword4" className="form-label text-start">Password</label>
              <input type="password" className="form-control" id="inputPassword4" />
            </div>
              <div className="col-12 d-flex mt-4 ">
                <button type="submit" className="btn btn-primary">Kyçu</button>
                <label className='ms-3'>Nëse nuk keni një llogari, <Link to='/register' className='text-decoration-none'>regjistrohu këtu</Link></label>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm