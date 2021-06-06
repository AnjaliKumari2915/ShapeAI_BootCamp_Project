import React from "react";

function Header(){
    return(
        <div>
            <header>
                <h1 className="hstyle">
                    <img src = {process.env.PUBLIC_URL + "ShapeAI.jpg"} alt="Logo"/>
                    <h4>SHAPE AI PROJECT</h4>
                </h1>
            </header>
        </div>
    );
}
export default Header;