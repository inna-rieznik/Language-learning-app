import React from 'react';
import {Link} from "react-router-dom";
import Error from '../images/Error.png'



const PageNotFound = (props) => {

    return (
        <div style={{ width: "800px", margin: "20px auto 0 auto"}}>
            <h1 style={{marginTop: "20px"}}>Page Not Found</h1>
            <h3>Back to <Link to="/">Home Page</Link></h3>
            <img src={Error} alt="Error" width="800px" height="auto"/>
        </div>
    );
}

export default PageNotFound;