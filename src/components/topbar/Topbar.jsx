import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"
import {Icon} from '@iconify/react'
export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">@dew_wee</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+1 360 855 5753</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>duynguyen1999@hotmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <Icon icon="mdi:linkedin"  width="19" height="19"/>
                        <span> &nbsp; duy-nguyen-05</span>
                    </div>
                    <div className="itemContainer">
                        <Icon icon="entypo-social:github"  width="19" height="19" />
                        <span>  &nbsp; DewWee05</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}