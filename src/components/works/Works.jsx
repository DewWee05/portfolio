import "./works.scss";
import { useState } from "react";
import {Icon} from '@iconify/react';
import myUwIcon from "../../assets/uw_icon.png";
import uwTacoma from "../../assets/uwtacoma.png";
import game from "../../assets/8-bit/gameprofile2.png";
import chather from "../../assets/chather/intro.PNG";
import arrow from "../../assets/arrow.png";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
          id: "1",
          icon: myUwIcon,
          title: "About Me",
          desc:
            "I am a graduate at the University at Washington-Tacoma with a BS in Computer Science. Experienced with object-oriented programming, mobile development, and agile software development. I am interested in learning new technologies that can help expand my knowledge on full stack development. I am eager to utilize my skills as a programmer to work on projects that can make a positive impact within our communities.",
          img:
            uwTacoma,
        },
        {
          id: "2",
          icon: "https://api.iconify.design/carbon/game-console.svg?width=40&height=40",
          title: "8-bit Armageddon",
          desc:
            "This game is a worm-like 2D strategy shooter local multiplayer game! You must take account of the angle, power, and the wind each turn. Hitting crates in the air will give you a weapon upgrade. Each weapon upgrade will increase damage to the weapon and a few will act differently. There are three different weapon levels, starting out will give you weapon set level 1 to begin. (Please note, if you hit a crate, please switch to a different weapon at the start of the turn to start with that new weapon set level). Try unlocking the hidden weapon!! But also be careful welding all that power! When starting the game, you’ll have a choice of how many turns (20+ and must be divisible by 2), how much time per match (5-10 seconds plus 3 seconds to pass the browser to your opponent), and how many players you want on the field (1v1, 2v2, 3v3, 4v4). Use the minimap to your advantage to see where your bullet lands and where are the crates in the sky!",
          img:
            game,
        },
        {
          id: "3",
          icon: "https://api.iconify.design/grommet-icons/android.svg?width=40&height=40",
          title: "Chather",
          desc:
            "Chather is an Android-based application that allows the user to create an account and make connections with their friends, who are also using the app. In Chather, the user can create many different chatrooms for their added contacts, allowing them to communicate and connect with whoever they want. The users can also check out the current weather and location of the app. With the weather application provides a 7-day 24-hour forecast, the users can check out their current location via Google Maps and change the styles of that map to match their desire. ",
          img:
            chather,
        },
      ];

      const handleClick = (way)=>{
          way === "left" 
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) 
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };
    return (
        <div className="works" id="works">
                <div 
                    className="slider" 
                    style={{transform: `translateX(-${currentSlide * 100}vw)`}}
                    >
                    {data.map(d=>(
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt=""/>
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <span></span>
                                </div>
                            </div>
                            <div className="right">
                                <img
                                    src={d.img}
                                    alt=""
                                    />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <img src={arrow} className="arrow left" alt="" onClick={()=>handleClick("left")}/>
                <img src={arrow} className="arrow right" alt="" onClick={()=>handleClick()} />
        </div>
    );
}