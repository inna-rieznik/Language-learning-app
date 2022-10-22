import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {useAuth} from "./components/login/Auth";
import {useNavigate} from "react-router-dom";


const AuthenticatedLayout = ({children, userId}) => {
    const {authTokens} = useAuth();
    const navigate = useNavigate();

    if (!authTokens) {
        return navigate('/login');
    }


    return (
        <div>
                <div className="headerContainer">
                    <Header authTokens={authTokens} userId={userId} />
                </div>
                <div className="container">
                    {children}
                </div>
                <Footer/>
        </div>
    )
}

export default AuthenticatedLayout