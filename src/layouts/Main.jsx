import React from "react";
import Navigation from "../components/Navigation";


const Main = ({ children }) => {

    return (
        <div>
            <Navigation />
            {children}
        </div>
    )
}

export default Main;