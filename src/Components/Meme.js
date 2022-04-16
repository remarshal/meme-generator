import React, { useState, useEffect } from "react";
import "../style.css";

function Meme() {
   const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: "",
   });

   const [allMemes, setAllMemes] = useState([ ]);

   useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
         .then(res => res.json())
         .then(memesData => setAllMemes(memesData.data.memes))
   }, [ ])

   function handleChange(event) {
      setMeme(prevData => {
         return {
            ...prevData,
            [event.target.name] : event.target.value
         }
      })
   }

   function newMeme() {
      const randomNumber = Math.floor(Math.random() * allMemes.length);
      const url = allMemes[randomNumber].url;
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
