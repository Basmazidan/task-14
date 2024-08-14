import "./Main.css"
import avatar from "../../assets/images/Oval.png"

import locationimg from '../../assets/images/003-pin.svg'
import tweiter from '../../assets/images/004-twitter.svg'
import url from '../../assets/images/002-url.svg'
import flag from '../../assets/images/001-office-building.svg'
import { useContext } from "react"
import { themecontext } from "../../App"
export const Main = () => {
    const valuespassed = useContext(themecontext)

  return (
    <div className={`${valuespassed.theme + "githupprofile"
    } main-div`}>

        <div className="userinfo">
            <div className="topdiv">
            

        <div className="avatar-div">
            <img src={avatar} alt="" />
        </div>

        <div id="use-name1">

        <div id="user-name">
        <h2 className={valuespassed.theme + "myh2"}>The Octocat</h2>
        <label className="mylabel3">@octocat</label>
        </div>

        <div id="user-name2">
        <label className={valuespassed.theme +"mylabel2"}>Joined 25 Jan 2011</label>
        </div>
        </div>
        </div>
        <div className="biodiv">
            
        <label className={valuespassed.theme +"mylabel2"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</label>
        </div>
        <div className="middlediv1">
        <div className={`${valuespassed.theme + "Details-Div"} midlle-div`}>
            <div className="detailsinfo">
                <label className={`${valuespassed.theme +"my-label"} mylabel4`}>Repos</label>
                <span className={`${valuespassed.theme +"myspan"}`}>8</span>
            </div>
            <div className="detailsinfo">
                <label className={`${valuespassed.theme +"my-label"} mylabel4`}>Followers</label>
                <span className={`${valuespassed.theme +"myspan"}`} >3938</span>
            </div>
            <div className="detailsinfo">
                <label className={`${valuespassed.theme +"my-label"} mylabel4`}>Following</label>
                <span className={`${valuespassed.theme +"myspan"}`} >9</span>
            </div>

        </div>
        </div>

        <div className="bottomdiv">
            <div className="links">
                <img src={locationimg} alt="" />
                <a className={`${valuespassed.theme +"my-label"} mylabel4`}
                href="">San Francisco</a>
            </div>

            <div className="links">
                <img src={tweiter} alt="" />
                <a className={`${valuespassed.theme +"my-anchr"}`}
                 href="">Not Available</a>
                </div>
            <div className="links">
                <img src={url} alt="" />
                <a className={`${valuespassed.theme +"my-label"} mylabel4`}
                 href="">https://github.blog</a>
            </div>
            <div className="links">
                <img src={flag} alt="" />
                <a className={`${valuespassed.theme +"my-label"} mylabel4`}
                href="">@github</a>
            </div>

        </div>
        </div>
        
    </div>
  )
}
export default Main