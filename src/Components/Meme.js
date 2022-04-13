import React, { useState } from "react";
import "../style.css";
import memesData from "../data";

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    });

    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function newMeme() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevState => ({
            ...prevState,
            randomImage: url
        }));
        console.log(meme.randomImage);
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="top text"></input>
                <input type="text" className="form--input" placeholder="bottom text"></input>
                <button onClick={newMeme} className="form--button">Get new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="main--img" />
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
            </div>
        </main>
    );
}

export default Meme;