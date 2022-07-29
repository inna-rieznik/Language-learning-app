import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./components/mainPage/MainPage";


const App = () => {
  return (
      <div className="app-wrapper">
        <div className="container">
          <Header/>
          <MainPage/>
          <Footer/>
        </div>
      </div>
  );
}


export default App;