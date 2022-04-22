import React from "react"

export default function Header(props){
    return(
        <header className={`header ${props.dark ? "dark--gradient" : ""}`}>
            <img src='images/troll-face.png' alt="Troll face" />
            <span className="header--title">Meme Generator</span>
            <span className="header--course">Learning React</span>
        </header>
    )
}