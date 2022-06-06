import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const EditDoctor = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [doctors, setDoctors] = useState([]);

    const handleSubmit = async () => {
        try{
            const res = await axios.put(`https://localhost:44333/api/doctors/${params.id}`, {

            })  
            navigate('/Doctors');
        }catch (error) {
            console.log(error)
        }

    }
  return (
    <div className='bg-light'>
            <div className='container min-vh-100'>
                <div className='min-vh-100 d-flex justify-content-center align-items-center'>
                    <form className='p-5 col-12 col-md-8 col-lg-6 row border bg-white position-relative rounded'>
                        <p style={{ background: "-webkit-linear-gradient(left, #0072ff, #8811c5)", height: "5rem" }} className='text-white text-center position-absolute top-0 start-0 fs-3 d-flex justify-content-center align-items-center'>Perditesim Per Doktor</p>
                        <div className='mt-5 pt-3 col-12 col-md-6 d-flex flex-column align-items-start'>
                            <label htmlFor="inputName4" className="form-label text-start">Emri</label>
                            <input type="text" className="form-control" id="inputName4" />
                            <span className='text-danger text-start'></span>
                        </div>
                        <div className="mt-5 pt-3 col-12 col-md-6 d-flex flex-column align-items-start">
                            <label htmlFor="inputSurname4" className="form-label text-start">Mbiemri</label>
                            <input  type="text" className="form-control" id="inputSurname4" />
                            <span className='text-danger text-start'></span>
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column align-items-start mt-3">
                            <label htmlFor="inputEmail" className="form-label text-start">Email</label>
                            <input  type="email" className="form-control" id="inputEmail" />
                            <span className='text-danger text-start'></span>
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column align-items-start mt-3">
                            <label htmlFor="inputPassword" className="form-label text-start">Fjalkalimi</label>
                            <input type="password" className="form-control" id="inputPassword" />
                            <span className='text-danger text-start'></span>
                        </div>
                        <div className="col-12 d-flex flex-column align-items-start mt-3">
                            <label htmlFor="inputAddress" className="form-label text-start">Adresa</label>
                            <input  type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            <span className='text-danger text-start'></span>
                        </div>
                        {/* <div className="col-12 col-md-6 d-flex flex-column align-items-start mt-3">
                            <label htmlFor="inputSpecialisation" className="form-label text-start">Specializimi</label>
                            <select id="inputSpecialisation" className="form-select">
                                <option value='Choose'>Zgjidh...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column align-items-start mt-3">
                            <label htmlFor="inputGender" className="form-label text-start">Gjinia</label>
                            <select id="inputGender" className="form-select">
                                <option value='Choose'>Zgjidh...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column align-items-start mt-3">
                            <label htmlFor="inputState" className="form-label text-start">Shteti</label>
                            <select id="inputState" className="form-select">
                                <option value='Choose'>Zgjidh...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column align-items-start mt-3">
                            <label htmlFor="inputCity" className="form-label text-start">Qyteti</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-12 col-md-2 d-flex flex-column align-items-start mt-3">
                            <label htmlFor="inputZip" className="form-label text-start">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        */}
                        <div className="col-12 d-flex mt-4 ">
                            <button type="submit" className="btn btn-primary">Perditso</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default EditDoctor