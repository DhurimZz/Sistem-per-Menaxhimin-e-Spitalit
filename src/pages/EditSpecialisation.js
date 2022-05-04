import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Dashboard from './Dashboard.js';


const EditSpecialisation = () => {
    const navigate = useNavigate();
    const params = useParams()
    
    const [name, setName] = useState('');

    const handleSubmit = async () => {
        try {
            const res = await axios.put(`https://localhost:44333/api/specialisations/${params.id}`, {
                name
            })
            navigate('/specialisations');
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        //Getting single specialisation by id
        (async ()=>{
            try {
                const res = await axios.get(`https://localhost:44333/api/specialisations/${params.id}`);
                setName(res.data.name)
            }catch(error){
                console.log(error)
            }
        })()
    },[])

    return (
        <div >
            <Dashboard >
                <div className='d-flex align-items-center justify-content-center w-100'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit()
                    }} className='d-flex flex-column align-items-start gap-2'>
                        <label htmlFor='specialisationName'>Name</label>
                        <input onChange={(e) => {
                            setName(e.target.value)
                        }}
                            className="form-control"
                            placeholder="type specialisation name"
                            value={name}
                            required id="specialisationName" />
                        <button className='btn btn-primary'>Submit</button>
                    </form>
                </div>
            </Dashboard>
        </div>
    )
}

export default EditSpecialisation