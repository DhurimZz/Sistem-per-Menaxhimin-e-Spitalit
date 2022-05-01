import React from "react";
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div id="main-conteiner">
            {/* SideBar-Pjesa anash */}
            <div>
                <div class="bg-info" id='SideBar'>
                    <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                        class="fas fa-user-secret me-2"></i>Admininstrata</div>
                    <div class="list-group list-group-flush my-3">
                        <a class="list-group-item list-group-item-action bg-transparent fw-bold">Dashboard</a>
                        <a class="list-group-item list-group-item-action bg-transparent fw-bold">Doktoret</a>
                        <a class="list-group-item list-group-item-action bg-transparent fw-bold">Pacientet</a>
                        <a class="list-group-item list-group-item-action bg-transparent fw-bold">Terminet</a>
                    </div>
                </div>
            </div>
            {/* Dashboardi */}
            <div>
                DASHBOARDI
            </div>
        </div>
    )
}
export default Dashboard