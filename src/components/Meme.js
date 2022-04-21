import React from "react"
import memesData from "../memesData"

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    //const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        return setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }
    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault()
    }
    return(
        <main className="meme">
            <div className="meme--form">
                <form onSubmit={handleSubmit}>
                    <div className="flex--container">
                        <input 
                            type="text" 
                            placeholder="Enter Top Text"
                            value={meme.topText}
                            name="topText"
                            onChange={handleChange}
                        />
                        <input 
                            type="text" 
                            placeholder="Enter Bottom Text"
                            value={meme.bottomText}
                            name="bottomText"
                            onChange={handleChange}
                        />
                    </div>
                    <button onClick={getMemeImage} className="meme--button">Get a new meme image</button>
                </form>
                <div className="meme--image--div">
                    {meme.randomImage && <img src={meme.randomImage} alt="Meme" className="meme--img" />}
                    {meme.topText && meme.randomImage &&<h2 className="top meme--text" >{meme.topText}</h2>}
                    {meme.bottomText && meme.randomImage &&<h2 className="bottom meme--text" >{meme.bottomText}</h2>}
                </div>
            </div>
        </main>
    )
}