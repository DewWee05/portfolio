import "./intro.scss"
import {init} from 'ityped'
import { useEffect, useRef } from "react"
import myPicture from "../../assets/duy2.png"
import arrowDown from "../../assets/down.png"
export default function Intro() {
    
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Software Developer", "Software Engineer","Student"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={myPicture} alt=""></img>
                </div>      
            </div>
            
            <div className="right">
                <div className="wrapper">
                    <h2> Hello, I'm</h2>
                    <h1> Duy Nguyen</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href ="#portfolio">
                    <img src={arrowDown} alt=""/>
                </a>
            </div>
        </div>
    )
}