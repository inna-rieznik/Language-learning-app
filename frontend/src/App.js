import React from "react";
import './App.css';
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
import QuizPage from "./components/mainPage/vocabulary/quiz/QuizPage";
import AuthenticatedLayout from "./AuthenticatedLayout";

const App = (props) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <Routes>
                    <Route path='/login'
                           element={<Login/>}/>
                    <Route path='/register'
                           element={<Register/>}/>
                    <Route path='/'
                           element={<AuthenticatedLayout>
                               <MainPage lessonsData={props.state.lessonsData}
                                         dispatch={props.dispatch}/>
                           </AuthenticatedLayout>}/>
                    <Route path='/create_lesson'
                           element={<AuthenticatedLayout>
                               <CreateLesson/>
                           </AuthenticatedLayout>}/>
                    <Route path='/review_grammar'
                           element={<AuthenticatedLayout>
                               <ReviewGrammar/>
                           </AuthenticatedLayout>}/>
                    <Route path={'/my_words'}
                           element={<AuthenticatedLayout>
                               <WordsPage wordsData={props.state.wordsData}
                                          dispatch={props.dispatch}
                                          newWordText={props.state.newWordText}
                                          newTranslationText={props.state.newTranslationText}
                               />
                           </AuthenticatedLayout>}/>
                    <Route path={'/review_words'}
                           element={<AuthenticatedLayout>
                               <ReviewWords/>
                           </AuthenticatedLayout>}/>

                    <Route path={'/review_grammar'}
                           element={<AuthenticatedLayout>
                               <ReviewGrammar/>
                           </AuthenticatedLayout>}/>
                    <Route path={'/review_words/quiz'}
                           element={<AuthenticatedLayout>
                               <QuizPage/>
                           </AuthenticatedLayout>}/>

                    <Route path={`lessons/id/:lessonId`}
                           element={<AuthenticatedLayout>
                               <LessonPage/>
                           </AuthenticatedLayout>}/>}
                    <Route path={`/user/:userId`}
                           element={<AuthenticatedLayout>
                               <UserPage/>
                           </AuthenticatedLayout>}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;