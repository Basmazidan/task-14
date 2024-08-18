import "./Main.css"
import avatar from "../../assets/images/Oval.png"

import locationimg from '../../assets/images/003-pin.svg'
import tweiter from '../../assets/images/004-twitter.svg'
import url from '../../assets/images/002-url.svg'
import flag from '../../assets/images/001-office-building.svg'
import { useContext } from "react"
import { themecontext } from "../../App"
export const Main = ({ userData }) => {
    console.log(userData);
    const valuespassed = useContext(themecontext)

    if (!userData) {
        return <div className={`${valuespassed.theme + "githupprofile"} main-div`}>No user data</div>;
      }


  return (
    <div className={`${valuespassed.theme + "githupprofile"} main-div`}>

        <div className="userinfo">
            <div className="topdiv">
            

        <div className="avatar-div">
            <img src={userData.avatar_url}  alt={`${userData.name}'s avatar`} 
 />
        </div>

        <div id="use-name1">
        <div id="user-name">
        <h2  className={valuespassed.theme + "myh2"}>{userData.name}</h2>
        <label className="mylabel3">@{userData.login}</label>
        </div>

        <div id="user-name2">
        <label className={valuespassed.theme +"mylabel2"}>Joined {userData.created_at}</label>
        </div>
        </div>
        </div>
        <div className="biodiv">
            
        <label className={valuespassed.theme +"mylabel2"}>{userData.bio}</label>
        </div>
        <div className="middlediv1">
        <div className={`${valuespassed.theme + "Details-Div"} midlle-div`}>
            <div className="detailsinfo">
                <label className={`${valuespassed.theme +"my-label"} mylabel4`}>Repos</label>
                <span className={`${valuespassed.theme +"myspan"}`}>{userData.public_repos}</span>
            </div>
            <div className="detailsinfo">
                <label className={`${valuespassed.theme +"my-label"} mylabel4`}>Followers</label>
                <span className={`${valuespassed.theme +"myspan"}`} >{userData.followers}</span>
            </div>
            <div className="detailsinfo">
                <label className={`${valuespassed.theme +"my-label"} mylabel4`}>Following</label>
                <span className={`${valuespassed.theme +"myspan"}`} >{userData.following}</span>
            </div>

        </div>
        </div>

        <div className="bottomdiv">


            <div className="links">
                <img src={locationimg} alt="" />
                <label className={`${valuespassed.theme +"my-label"} mylabel4`}
                href="">{userData.location}</label>
            </div>
            <div className="links">
                <img src={tweiter} alt="" />
                <a className={`${valuespassed.theme +"my-anchr"}`}
                 href="">{userData.twitter_username}</a>
                </div>


            <div className="links">
                <img src={url} alt="" />
                <a className={`${valuespassed.theme +"my-label"} mylabel4`}
                 href="">{userData.blog}</a>
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