import "../style.css";
import memeData from "../data"

function Meme() {
    function newMeme() {
        console.log("clicked")
    }
    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="top text"></input>
                <input type="text" className="form--input" placeholder="bottom text"></input>
                <button onClick={newMeme} className="form--button">get new meme image</button>
            </div>
        </main>
    );
}

export default Meme;