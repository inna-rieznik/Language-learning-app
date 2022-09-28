import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./components/mainPage/MainPage";
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    Navigate
} from "react-router-dom";
import Login from "./components/login/Login";
import UserPage from "./components/userPage/UserPage";
import WordsPage from "./components/wordsPage/WordsPage";
import ReviewWords from "./components/mainPage/vocabulary/quiz/ReviewWords";
import LessonPage from "./components/mainPage/lessons/lessonPage/LessonPage";
import AddNewWord from "./components/mainPage/vocabulary/addNewWord/addNewWord";
import FinalScreen from "./components/mainPage/vocabulary/quiz/finalScreen/FinalScreen";
import Question from "./components/mainPage/vocabulary/quiz/questions/Question";
import state, {updateNewWordText} from "./components/redux/reduxStore";
import Register from "./components/login/Register";
import {Quiz} from "@mui/icons-material";
import CreateLesson from "./components/mainPage/lessons/CreateLesson";
import ReviewGrammar from "./components/mainPage/vocabulary/quiz/ReviewGrammar";


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

                        <Route path='/user'
                               element={<UserPage/>}/>
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
                        <Route path={'/review_words/quiz'}
                               element={<Quiz/>}/>
                        <Route path='/questions'
                               element={<Question/>}/>
                        <Route path='/score'
                               element={<FinalScreen/>}/>
                        <Route path={`lesson/:lessonId`}
                               element={<LessonPage lessonsData={props.state.lessonsData}/>}/>}

                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;