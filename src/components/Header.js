import { LOGO_URL } from "../utils/contants";
import {useState} from "react"

const Header = () => {
    const [btnuseState,setbtnname] = useState("Login")
    return (
        <div className="heading">
            <div className="logo-container">
                <img className="logo"  src = {LOGO_URL}/>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                        <button className="loginbtn" 
                        onClick = {() =>{
                            btnuseState === "Login"?setbtnname("Logout") : setbtnname("Login")


                        }}>{btnuseState}</button>

                    </ul>
                </div>
            </div>
    );
};

export default Header;