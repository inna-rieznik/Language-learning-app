import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./components/mainPage/MainPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import VocabularyPage from "./components/vocabularyPage/VocabularyPage";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <div className="container">
                    <Header/>
                    <Routes>
                        <Route path='/' element={<MainPage/>}/>
                        <Route path='/vocabularyPage' element={<VocabularyPage/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;