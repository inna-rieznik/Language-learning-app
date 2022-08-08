import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./components/mainPage/MainPage";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import Login from "./components/login/Login";
import UserPage from "./components/userPage/UserPage";
import VocabularyPage from "./components/vocabularyPage/VocabularyPage";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                {/* <Login/> */}
                  <div className="headerContainer">
                    <Header/>
                </div>
                <div className="container">
                    <Routes>
                        <Route path='/user' element={<UserPage/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/' element={<MainPage/>}/>
                        <Route path={'/my_words'} element={<VocabularyPage/>}/>
                        {/* <Route path={'/review_grammar'} element={}/>*/}
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;