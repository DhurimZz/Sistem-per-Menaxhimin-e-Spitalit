import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard.js';


const Doctors = () => {
    const [doctors, setDoctors] = useState([]);


    const fetchAllDoctors = async () =>{ 
        try {
            const res = await axios.get('https://localhost:44333/api/doctors/get-doctors')
            setDoctors(res.data)
        }catch(error){
            console.log(error)
        }
    }

    const deleteUser = async (id)=>{
        try {
            const res = await axios.delete(`https://localhost:44333/api/doctors/delete-doctor/${id}`)
            await fetchAllDoctors()
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchAllDoctors()
    },[])

    return (
        <div >
        <Dashboard >
            <div className='w-100'>
                <table className="table table-success table-striped ">
                    <thead>
                    <tr>
                            <th scope="col">#</th>
                            <th scope="col">Emri</th>
                            <th scope="col">Mbiemri</th>
                            <th scope="col">Email</th>
                            <th scope="col">Specializimi</th>
                            <th scope="col">Gjinia</th>
                            <th scope="col">Shtetesia</th>
                            <th scope="col">Roli</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor)=>(
                                <tr key={doctor.id}>
                                    <th scope="row">1</th>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.surname}</td>
                                    <td>{doctor.email}</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td>Doctor</td>
                                    <td><button type="button"className="btn btn-primary" >Edit</button></td>
                                    <td><button type="button"className="btn btn-danger" onClick={()=>deleteUser(doctor.id)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            </Dashboard>
        </div>
    )
}

export default Doctors