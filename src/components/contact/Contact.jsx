import {useState} from "react";
import "./contact.scss";
import shake from "../../assets/shake.svg";
export default function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact"> 
            <div className="left">
                <img src={shake} alt=""/>
            </div>

        <div className="right">
            <h2>Ask me a question.</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send</button>
                {message && <span> Thank you for connecting, I will replay ASAP! </span>}
            </form>
        </div>

        </div>
    )
}