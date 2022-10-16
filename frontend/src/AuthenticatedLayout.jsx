import React from 'react'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {useState} from "react";
import {useAuth} from "./components/login/Auth";
import {useNavigate} from "react-router-dom";

const AuthenticatedLayout = ({children}) => {
    const {authTokens} = useAuth();
    const navigate = useNavigate();
    /*
        const [authTokens, setAuthTokens] = useState(
            localStorage.getItem("tokens") || ""
        );
        const setTokens = (data) => {
            localStorage.setItem("tokens", JSON.stringify(data));
            setAuthTokens(data);
        };

        console.log("authTokens", authTokens);

        const handleLogout = () => {
            localStorage.removeItem("tokens");
            setAuthTokens("");
        };
    */

    if (!authTokens) {
        return navigate('/login');
    }

    return (
        <div>

            <div className="headerContainer">
                <Header/>
            </div>
            <div className="container">
                {children}
            </div>
            <Footer/>

        </div>
    )
}

export default AuthenticatedLayout