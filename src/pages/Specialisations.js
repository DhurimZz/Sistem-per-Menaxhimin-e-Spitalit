import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard.js';


const Specialisations = () => {
    var index = 1;
    const navigate = useNavigate();
    const [specialisations, setSpecialisations] = useState([]);


    const fetchAllSpecialisations = async () =>{ 
        try {
            const res = await axios.get('https://localhost:44333/api/specialisations')
            setSpecialisations(res.data)
        }catch(error){
            console.log(error)
        }
    }

    const deleteSpecialisation = async (id)=>{
        try {
            const res = await axios.delete(`https://localhost:44333/api/specialisations/${id}`)
            await fetchAllSpecialisations()
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchAllSpecialisations()
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
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            specialisations.map((specialisations)=>(
                                <tr key={specialisations.specialisationId}>
                                    <th scope="row">{index++}</th>
                                    <td>{specialisations.name}</td>
                                    <td><button type="button"className="btn btn-primary" onClick={()=>navigate(`/specialisations/edit/${specialisations.specialisationId}`)} >Edit</button></td>
                                    <td><button type="button"className="btn btn-danger" onClick={()=>deleteSpecialisation(specialisations.specialisationId)}>Delete</button></td>
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

export default Specialisations