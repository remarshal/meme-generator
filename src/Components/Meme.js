import React, { useState } from "react";
import "../style.css";
import memesData from "../data";

function Meme() {
   const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: "",
   });

   const [allMemeImages, setAllMemeImages] = useState(memesData);

   function handleChange(event) {
      setMeme(prevData => {
         return {
            ...prevData,
            [event.target.name] : event.target.value
         }
      })
   }

   function newMeme() {
      const memesArray = allMemeImages.data.memes;
      const randomNumber = Math.floor(Math.random() * memesArray.length);
      const url = memesArray[randomNumber].url;
      setMeme((prevState) => ({
         ...prevState,
         randomImage: url,
      }));
      console.log(meme.randomImage);
   }

   return (
      <main>
         <div className="form">
            <input
               type="text"
               className="form--input"
               placeholder="top text"
               name="topText"
               onChange={handleChange}
               value={meme.topText}
            ></input>
            <input
               type="text"
               className="form--input"
               placeholder="bottom text"
               name="bottomText"
               onChange={handleChange}
               value={meme.bottomText}
            ></input>
            <button onClick={newMeme} className="form--button">
               get new meme image
            </button>
         </div>
         <div className="meme">
            <img src={meme.randomImage} className="main--img" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
         </div>
      </main>
   );
}

export default Meme;
