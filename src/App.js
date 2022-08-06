import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./components/mainPage/MainPage";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import VocabularyPage from "./components/vocabularyPage/VocabularyPage";
import Login from "./components/login/Login";
import UserPage from "./components/userPage/UserPage";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <div className="headerContainer">
                <Header/>
                </div>
                <div className="container">
                    <Routes>
                        <Route path='/user' element={<UserPage/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/' element={<MainPage/>}/>
                        <Route path='/vocabularyPage' element={<VocabularyPage/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;