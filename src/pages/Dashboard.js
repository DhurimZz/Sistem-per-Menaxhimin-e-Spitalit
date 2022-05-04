import React from "react";
import { Link } from "react-router-dom";
import './Dashboard.css';

const Dashboard = ({children}) => {
    return (
        <div id="main-conteiner" >
            {/* SideBar-Pjesa anash */}
            <div>
                <div className="bg-info" id='SideBar'>
                    <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                        className="fas fa-user-secret me-2"></i>Admininstrata</div>
                    <div className="list-group list-group-flush my-3">
                        <a className="list-group-item list-group-item-action bg-transparent fw-bold">Dashboard</a>
                       <Link to='/doctorCreateReadUpdateDelete' className="list-group-item list-group-item-action bg-transparent fw-bold"> Doktoret</Link>
                       <Link to='/patient' className="list-group-item list-group-item-action bg-transparent fw-bold"> Pacientet</Link>
                        <a className="list-group-item list-group-item-action bg-transparent fw-bold">Terminet</a>
                    </div>
                </div>
            </div>
            {/* Dashboardi */}
            {children}
            
        </div>
    )
}
export default Dashboard