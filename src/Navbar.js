import React from 'react'
import './Navbar.css'
import { useEffect, useState } from 'react'

function Navbar() {

    const [show, handleShow] = useState(false);

     useEffect(() => {
         window.addEventListener("scroll", ()=> {
             if(window.scrollY > 100){
                 handleShow(true);
             } else handleShow(false);
         });
         return() => {
             window.removeEventListener("scroll");
         };
     }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src="https://vignette.wikia.nocookie.net/dynastytv/images/5/54/Netflix_logo.png/revision/latest?cb=20171022162747" alt="netflix"/>
            <img className="nav_avatar" src="https://www.transparentpng.com/thumb/transformers-logo/KOScxJ-transformers-red-head-logo.png" alt="netflix"/>
        </div>
    )
}

export default Navbar
