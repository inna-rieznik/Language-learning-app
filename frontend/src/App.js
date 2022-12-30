import React, {useEffect, useState} from "react";
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
import QuizWordsPage from "./components/mainPage/vocabulary/quiz/QuizWordsPage";
import AuthenticatedLayout from "./AuthenticatedLayout";
import {AuthContext} from "./components/login/Auth";
import FlashcardsPage from "./components/mainPage/vocabulary/flashcards/FlashcardsPage";
import OpenQuestionsPage from "./components/mainPage/vocabulary/openQuestions/OpenQuestionsPage";
import MatchingPage2 from "./components/mainPage/vocabulary/matching2/MatchingPage2";
import PageNotFound from "./components/PageNotFound";
import QuizGrammarPage from "./components/mainPage/vocabulary/quiz/QuizGrammarPage";




const App = (props) => {


    const [authTokens, setAuthTokens] = useState(localStorage.getItem("tokens") || "");
    let [userId, setUserId] = useState("");
    let [userScore, setUserScore] = useState("");
    let [userLevel, setUserLevel] = useState("");

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("tokens"));
        if (user) {
            Object.keys(user).forEach(key => {
                setUserId(user[key].id_user);
                setUserScore(user[key].score);
                setUserLevel(user[key].level);
            })
        }
    }, [userId])


    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setUserId(data.id_user);
        setUserScore(data.score);
    };

    const handleLogout = () => {
        localStorage.removeItem("tokens");
        localStorage.removeItem("token");
        setAuthTokens("");
    };

    return (
        <BrowserRouter>
            <AuthContext.Provider value={{
                userId,
                userScore,
                userLevel,
                authTokens,
                setUserLevel,
                setUserScore,
                setAuthTokens: setTokens,
                handleLogout
            }}>
                {/* a*/}
                <div className="app-wrapper">
                    <Routes>
                        <Route path='/login'
                               element={<Login/>}/>
                        <Route path='/register'
                               element={<Register/>}/>
                        <Route path='/'
                               element={<AuthenticatedLayout>
                                   <MainPage/>
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
                                   <WordsPage/>
                               </AuthenticatedLayout>}/>
                        <Route path={'/review_words'}
                               element={<AuthenticatedLayout>
                                   <ReviewWords/>
                               </AuthenticatedLayout>}/>
                        <Route path={'/review_grammar'}
                               element={<AuthenticatedLayout>
                                   <ReviewGrammar/>
                               </AuthenticatedLayout>}/>
                        <Route path={'/review_grammar/quiz'}
                               element={<AuthenticatedLayout>
                                   <QuizGrammarPage/>
                               </AuthenticatedLayout>}/>
                        <Route path={'/review_words/quiz'}
                               element={<AuthenticatedLayout>
                                   <QuizWordsPage/>
                               </AuthenticatedLayout>}/>
                        <Route path={'/review_words/translate'}
                               element={<AuthenticatedLayout>
                                   <OpenQuestionsPage/>
                               </AuthenticatedLayout>}/>
                        <Route path={'/review_words/flashcards'}
                               element={<AuthenticatedLayout>
                                   <FlashcardsPage/>
                               </AuthenticatedLayout>}/>
                        <Route path={'/review_words/matching_translation'}
                               element={<AuthenticatedLayout>
                                   <MatchingPage2/>
                               </AuthenticatedLayout>}/>
                        <Route path={'/review_words/matching_sentences'}
                               element={<AuthenticatedLayout>
                               </AuthenticatedLayout>}/>
                        <Route path={`lessons/id/:lessonId`}
                               element={<AuthenticatedLayout>
                                   <LessonPage/>
                               </AuthenticatedLayout>}/>}
                        <Route path={`/user/:userId`}
                               element={<AuthenticatedLayout>
                                   <UserPage/>
                               </AuthenticatedLayout>}/>
                        <Route path={`*`}
                               element={<AuthenticatedLayout>
                                   <PageNotFound/>
                               </AuthenticatedLayout>}/>
                    </Routes>
                </div>
            </AuthContext.Provider>
        </BrowserRouter>


    )
        ;
}

export default App;