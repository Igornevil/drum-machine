import React, { useState } from "react";

function App() {
    const [desc, setDesc] = useState("");
    const [state] = useState([
        {
            key: "Q",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        },
        {
            key: "W",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        },

        {
            key: "E",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        },
        {
            key: "A",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        },
        {
            key: "S",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        },
        {
            key: "D",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        },
        {
            key: "Z",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        },
        {
            key: "X",
            src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        },
        {
            key: "C",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        }
    ]);
    const regEx = /[a-zA-Z-_0-9]+(?=.mp3)/;

    function handleClk(el) {
        const key = document.getElementById(el);
        const temp = state
            .filter((element) => element.key === el)[0]
            .src.match(regEx)[0];
        setDesc(temp);
        key.play();
        key.closest("div").classList.add("active");
        setTimeout(() => {
            key.closest("div").classList.remove("active");
        }, 100);
    }

    document.addEventListener("keydown", function (event) {
        switch (event.code) {
            case "KeyQ":
            case "KeyW":
            case "KeyE":
            case "KeyA":
            case "KeyS":
            case "KeyD":
            case "KeyZ":
            case "KeyX":
            case "KeyC":
                handleClk(event.code.toString().slice(-1));
                break;
            default:
                break;
        }
    });

    function handelClick(event) {
        handleClk(event.target.children[0].id);
    }
    return (
        <>
            <div className="inner-container App">
                <div id="drum-machine">
                    <div className="pad-bank">
                        {state.map((el) => (
                            <div
                                className="drum-pad"
                                key={el.key}
                                onClick={handelClick}
                            >
                                <audio
                                    className="clip"
                                    id={el.key}
                                    src={el.src}
                                ></audio>
                                {el.key}
                            </div>
                        ))}
                    </div>
                    <div id="display">
                        <div className="content">{desc}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
