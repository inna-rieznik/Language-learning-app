import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./components/mainPage/MainPage";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Login from "./components/login/Login";
import UserPage from "./components/userPage/UserPage";
import WordsPage from "./components/wordsPage/WordsPage";
import ReviewWords from "./components/mainPage/vocabulary/ReviewWords";
import LessonPage from "./components/mainPage/lessons/lessonPage/LessonPage";
import Register from "./components/login/Register";
import CreateLesson from "./components/mainPage/lessons/CreateLesson";
import ReviewGrammar from "./components/mainPage/vocabulary/ReviewGrammar";
import {Quiz} from "@mui/icons-material";



const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                {/* <Login/>*/}
                <div className="headerContainer">
                    <Header/>
                </div>

                <div className="container">
                    <Routes>
                        <Route path='/'
                               element={<MainPage lessonsData={props.state.lessonsData}
                                                  dispatch={props.dispatch}/>}/>
                        <Route path='/create_lesson'
                               element={<CreateLesson/>}/>
                        <Route path='/review_grammar'
                               element={<ReviewGrammar/>}/>
                        <Route path='/login'
                               element={<Login/>}/>
                        <Route path='/register'
                               element={<Register/>}/>
                        <Route path={'/my_words'}
                               element={<WordsPage wordsData={props.state.wordsData}
                                                   dispatch={props.dispatch}
                                                   newWordText={props.state.newWordText}
                                                   newTranslationText={props.state.newTranslationText}
                               />}/>
                        <Route path={'/review_words'}
                               element={<ReviewWords/>}/>

                        <Route path={'/review_grammar'}
                               element={<ReviewGrammar/>}/>
                        <Route path={'/review_words/quiz'}
                               element={<Quiz/>}/>

                        <Route path={`lessons/id/:lessonId`}
                               element={<LessonPage />}/>}
                        <Route path={`/user/:userId`}
                               element={<UserPage/>}/>

                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;