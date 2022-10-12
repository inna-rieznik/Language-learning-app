import React from 'react'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {useState} from "react";

const AuthenticatedLayout = ({children}) => {
    //na kazde autentication strance kontrola jestli user prihlaseny
    //kontrolu delat from local storage
   // if(!neniPrihlaseny)


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
    )}

export default AuthenticatedLayout