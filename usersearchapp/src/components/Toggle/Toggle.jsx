import './Toggle.css'
import SunImg from '../../assets/images/002-sun.svg'
import DarkImg from '../../assets/images/Path.svg'
import { useState } from 'react'
import { themecontext } from '../../App'
import { useContext } from 'react'

const Toggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const n =useContext(themecontext)

    const toggleTheme = (event) => {
        let newvalue;
        if(event.target.checked == false){
            newvalue="light"
        }else{
            newvalue="dark"
        }
        n.settheme(newvalue);
        console.log(newvalue);
        
      setIsDarkMode(!isDarkMode);
    };
  

  return (
    <div className='toggleDiv'>
        <label  className={n.theme +"header"}>devfinder</label>
    <div className="toggle-container">
    <span id="mode-label" className={n.theme +"myheader"}>
        {isDarkMode ? 'light' : 'dark'}
      </span>

        <input type="checkbox" id="theme-toggle" checked={isDarkMode}
        onChange={toggleTheme}></input>
        <label htmlFor="theme-toggle" className="toggle-switch" >

            <span className="icon moon"><img src={DarkImg} /></span>
            <span className="icon sun"><img src={SunImg}  /></span>
        </label>
        </div>
        </div>
  )
}

export default Toggle