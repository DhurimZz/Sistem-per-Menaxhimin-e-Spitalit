import React from 'react';
import { Link } from 'react-router-dom';



const RegisterPatient = () => {
    return (
        <div className='bg-light'>
            <div className='container min-vh-100'>
                <div className='min-vh-100 d-flex justify-content-center align-items-center'>
                    <form className='p-5 col-12 col-md-8 col-lg-6 row border bg-white position-relative rounded'>
                        <p style={{ background: "-webkit-linear-gradient(left, #0072ff, #8811c5)", height: "5rem" }} className='text-white text-center position-absolute top-0 start-0 fs-3 d-flex justify-content-center align-items-center'>Regjister Per Pacient</p>
                        <div className='mt-5 pt-3 col-12 col-md-6 d-flex flex-column justify-content-start'>
                            <label htmlFor="inputEmail4" className="form-label text-start">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="mt-5 pt-3 col-12 col-md-6 d-flex flex-column justify-content-start ">
                            <label htmlFor="inputPassword4" className="form-label text-start">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12 d-flex flex-column justify-content-start mt-3">
                            <label htmlFor="inputAddress" className="form-label text-start">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-12 d-flex flex-column justify-content-start mt-3">
                            <label htmlFor="inputAddress2" className="form-label text-start">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column justify-content-start mt-3">
                            <label htmlFor="inputState" className="form-label text-start">State</label>
                            <select id="inputState" className="form-select">
                                <option value='Choose'>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column justify-content-start mt-3">
                            <label htmlFor="inputCity" className="form-label text-start">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-12 col-md-2 d-flex flex-column justify-content-start mt-3">
                            <label htmlFor="inputZip" className="form-label text-start">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="col-12 d-flex mt-4 ">
                            <button type="submit" className="btn btn-primary">Apliko</button>
                            <label className='ms-3'>Tashmë keni një llogari? <Link to='/login' className='text-decoration-none'>Kyçu këtu</Link></label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPatient