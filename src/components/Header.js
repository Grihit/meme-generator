import React from "react"

export default function Header(){
    return(
        <header className="header">
            <img src='images/troll-face.png' alt="Troll face" />
            <span className="header--title">Meme Generator</span>
            <span className="header--course">React Course - Project 3</span>
        </header>
    )
}