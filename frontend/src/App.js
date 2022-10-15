import React, {useState} from "react";
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
import {AuthContext} from "./components/login/Auth";

const App = (props) => {

    const [authTokens, setAuthTokens] = useState(
        localStorage.getItem("tokens") || ""
    );
    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    };

    console.log("authTokens", authTokens);


    return (
        <BrowserRouter>
            <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
                <div className="app-wrapper">

                    <Routes>
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


                        <Route path='/login'
                               element={<Login/>}/>
                        <Route path='/register'
                               element={<Register/>}/>
                    </Routes>

                </div>
            </AuthContext.Provider>
        </BrowserRouter>
    );
}

export default App;