import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer"
import './Main.css';

const Main = ({ children }) => {

    return (
        <div>
        <div className='page-container'>
        <div className='content-wrap'>
                    <Navigation />
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Main;