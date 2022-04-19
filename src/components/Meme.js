import React from "react"
import memesData from "../memesData"

export default function Meme(){
    const [memeUrl, setMemeUrl] = React.useState("")
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        return setMemeUrl(url)
    }

    return(
        <main className="meme">
            <div className="meme--form">
                <div className="flex--container">
                    <input type="text" placeholder="Enter Top Text"/>
                    <input type="text" placeholder="Enter Bottom Text" />
                </div>
                <button onClick={getMemeImage} className="meme--button">Get a new meme image</button>
                <img src={memeUrl} alt="Meme Image" className="meme--img" />
            </div>
        </main>
    )
}