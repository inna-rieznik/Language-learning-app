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
import QuizPage from "./components/mainPage/vocabulary/quiz/QuizPage";
import AuthenticatedLayout from "./AuthenticatedLayout";
import {AuthContext} from "./components/login/Auth";
import FlashcardsPage from "./components/mainPage/vocabulary/flashcards/FlashcardsPage";
import MatchingPage from "./components/mainPage/vocabulary/Matching/MatchingPage";
import MatchingPage2 from "./components/mainPage/vocabulary/matching2/MatchingPage2";


const App = (props) => {

    const [authTokens, setAuthTokens] = useState(localStorage.getItem("tokens") || "");
    let [userId, setUserId] = useState("");

 /*   useEffect(() => {
        const authTokensT = JSON.parse(localStorage.getItem('tokens'))
        if (authTokensT) {
            setAuthTokens(authTokensT)
        }
    }, [])
*/

    //kdyz zkousim ZAREGISTROVAT SE -> tohle zpusobi chyby !!!!!!!!!!!!!!!!

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("tokens"));
       /* Object.keys(user).forEach(key => {
            setUserId(user[key].id_user);
            console.log(user[key].id_user);
        })*/
    }, [userId])

    console.log("user_id", userId);

    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));

      /*  data?.forEach((key) => {
            setUserId(key.id_user);
        })*/

    };

    const handleLogout = () => {
        localStorage.removeItem("tokens");
        localStorage.removeItem("token");
        setAuthTokens("");
    };


    console.log("authTokens", authTokens);

    return (
        <BrowserRouter>
            <AuthContext.Provider value={{userId, authTokens, setAuthTokens: setTokens, handleLogout}}>
                <div className="app-wrapper">
                    <Routes>
                        <Route path='/login'
                               element={<Login userId={userId}/>}/>
                        <Route path='/register'
                               element={<Register userId={userId}/>}/>

                        <Route path='/'
                               element={<AuthenticatedLayout authTokens={authTokens} userId={userId}>
                                   <MainPage lessonsData={props.state.lessonsData}
                                             dispatch={props.dispatch}/>
                               </AuthenticatedLayout>}/>

                        <Route path='/create_lesson'
                               element={<AuthenticatedLayout authTokens={authTokens} userId={userId}>
                                   <CreateLesson/>
                               </AuthenticatedLayout>}/>
                        <Route path='/review_grammar'
                               element={<AuthenticatedLayout authTokens={authTokens} userId={userId}>
                                   <ReviewGrammar/>
                               </AuthenticatedLayout>}/>
                        <Route path={'/my_words'}
                               element={<AuthenticatedLayout authTokens={authTokens} userId={userId}>
                                   <WordsPage wordsData={props.state.wordsData}
                                              dispatch={props.dispatch}
                                              newWordText={props.state.newWordText}
                                              newTranslationText={props.state.newTranslationText}
                                   />
                               </AuthenticatedLayout>}/>
                        <Route path={'/review_words'}
                               element={<AuthenticatedLayout authTokens={authTokens} userId={userId}>
                                   <ReviewWords/>
                               </AuthenticatedLayout>}/>

                        <Route path={'/review_grammar'}
                               element={<AuthenticatedLayout authTokens={authTokens} userId={userId}>
                                   <ReviewGrammar/>
                               </AuthenticatedLayout>}/>
                        <Route path={'/review_words/quiz'}
                               element={<AuthenticatedLayout authTokens={authTokens} userId={userId}>
                                   <QuizPage/>
                               </AuthenticatedLayout>}/>
                        <Route path={'/review_words/flashcards'}
                               element={<AuthenticatedLayout authTokens={authTokens} userId={userId}>
                                   <FlashcardsPage/>
                               </AuthenticatedLayout>}/>

                        <Route path={'/review_words/matching_translation'}
                               element={<AuthenticatedLayout authTokens={authTokens} userId={userId}>
                                   <MatchingPage2/>
                               </AuthenticatedLayout>}/>

                        <Route path={'/review_words/matching_sentences'}
                               element={<AuthenticatedLayout authTokens={authTokens} userId={userId}>

                               </AuthenticatedLayout>}/>

                        <Route path={`lessons/id/:lessonId`}
                               element={<AuthenticatedLayout authTokens={authTokens} userId={userId}>
                                   <LessonPage/>
                               </AuthenticatedLayout>}/>}
                        <Route path={`/user/:userId`}
                               element={<AuthenticatedLayout authTokens={authTokens} userId={userId}>
                                   <UserPage/>
                               </AuthenticatedLayout>}/>

                    </Routes>

                </div>
            </AuthContext.Provider>
        </BrowserRouter>
    );
}

export default App;