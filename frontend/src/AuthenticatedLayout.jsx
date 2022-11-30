import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {useAuth} from "./components/login/Auth";
import {useNavigate} from "react-router-dom";


const AuthenticatedLayout = ({children, onlyAdmin}) => {
    const {authTokens} = useAuth();
    const navigate = useNavigate();

    if (!authTokens) {
        return navigate('/login');
    }

    /*if (onlyAdmin)*/


    return (
        <div>
                <div className="headerContainer">
                    <Header/>
                </div>
                <div className="container">
                    {children}
                </div>
                <Footer/>
        </div>
    )
}

export default AuthenticatedLayout