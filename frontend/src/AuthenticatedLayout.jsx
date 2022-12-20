import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {useAuth} from "./components/login/Auth";
import {useNavigate} from "react-router-dom";
import {Fragment} from "react";


const AuthenticatedLayout = ({children, onlyAdmin}) => {
    const {authTokens} = useAuth();
    //const navigate = useNavigate();

    if (!localStorage.getItem("token")) {
        window.location.href = '/login'
        return null
    }

    /*if (onlyAdmin)*/


    return (
        <Fragment>
                <div className="headerContainer">
                    <Header/>
                </div>
                <div className="container">
                    {children}
                </div>
                <Footer/>
        </Fragment>
    )
}

export default AuthenticatedLayout