import React from "react"

export default function Meme(){
    return(
        <main className="meme">
            <form className="meme--form">
                <div className="flex--container">
                    <input placeholder="Enter text above"/>
                    <input placeholder="Enter text below" />
                </div>
                <button className="meme--button">Get a new meme image</button>
            </form>
        </main>
    )
}