import s from './Matching.module.css'
import Button from "@mui/material/Button";
import * as React from "react";

const brands = [
    {
        iconName: "adobe",
        brandName: "Adobe",
        color: "#ff0000"
    },
    {
        iconName: "airbnb",
        brandName: "Airbnb",
        color: "#fd5c63"
    },
    {
        iconName: "amazon",
        brandName: "Amazon",
        color: "#333333"
    },
    {
        iconName: "android",
        brandName: "Android",
        color: "#a4c639"
    },
    {
        iconName: "angellist",
        brandName: "AngelList",
        color: "#000000"
    },
    {
        iconName: "angular",
        brandName: "Angular",
        color: "#b52e31"
    },
    {
        iconName: "app-store-ios",
        brandName: "App Store",
        color: "#5fc9f8"
    },
    {
        iconName: "apple",
        brandName: "Apple",
        color: "#aaaaaa"
    },
    {
        iconName: "bitcoin",
        brandName: "Bitcoin",
        color: "#d4af37"
    },
    {
        iconName: "blackberry",
        brandName: "BlackBerry",
        color: "#000000"
    },
    {
        iconName: "blogger",
        brandName: "Blogger",
        color: "#f57d00"
    },
    {
        iconName: "bluetooth",
        brandName: "Bluetooth",
        color: "#3b5998"
    },
    {
        iconName: "bootstrap",
        brandName: "Bootstrap",
        color: "#553c7b"
    },
    {
        iconName: "chrome",
        brandName: "Google Chrome",
        color: "#333333"
    },
    {
        iconName: "codepen",
        brandName: "CodePen",
        color: "#111111"
    },
    {
        iconName: "cpanel",
        brandName: "cPanel",
        color: "#ff6c2c"
    },
    {
        iconName: "css3-alt",
        brandName: "CSS3",
        color: "#264de4"
    },
    {
        iconName: "dev",
        brandName: "Dev",
        color: "#111111"
    },
    {
        iconName: "dhl",
        brandName: "DHL",
        color: "#ba0c2f"
    }
]

const Matching = (props) => {

    return (
        <div className={s.content}>
            <div className={s.score}>
                <span className="correct">0</span>/<span className="total">0</span>
                <Button variant="contained">Try Again</Button>
            </div>
            <div className="draggableItems">

            </div>
            <div className="matchingPairs">

            </div>
        </div>
    );
}

export default Matching;