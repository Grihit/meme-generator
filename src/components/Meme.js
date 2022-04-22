import React from "react"

export default function Meme(props){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data))
    }, [])

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
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
                            className={props.dark ? "dark--input" : "light--input"}
                            />
                        <input 
                            type="text" 
                            placeholder="Enter Bottom Text"
                            value={meme.bottomText}
                            name="bottomText"
                            onChange={handleChange}
                            className={props.dark ? "dark--input" : "light--input"}
                        />
                    </div>
                    <button onClick={getMemeImage} className={`meme--button ${props.dark ? "dark--gradient dark--button" : ""}`}>Get a new meme image</button>
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