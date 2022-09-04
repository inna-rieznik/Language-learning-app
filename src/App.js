import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./components/mainPage/MainPage";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import Login from "./components/login/Login";
import UserPage from "./components/userPage/UserPage";
import WordsPage from "./components/wordsPage/WordsPage";
import Quiz from "./components/mainPage/vocabulary/quiz/Quiz";
import LessonPage from "./components/mainPage/lessons/lessonPage/LessonPage";


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
                        <Route path='/' element={<MainPage lessonsData={props.lessonsData}/>}/>
                        <Route path={'/my_words'} element={<WordsPage wordsData={props.wordsData}/>}/>
                        {/* <Route path={'/review_grammar'} element={}/>*/}
                        <Route path={'/quiz'} element={<Quiz/>}/>
                        <Route path={`/lesson/${props.lessonsData.id}`} element={<LessonPage lessonsData={props.lessonsData}/>} />}
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;