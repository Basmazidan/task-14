import Toggle from './components/Toggle/Toggle'
import './App.css'
import Search from './components/search/Search';
import Main from './components/main/Main';
import { createContext, useState } from 'react'

export const themecontext =createContext(null);
function App() {
  const [theme,settheme]=useState("light")
  const [userData, setUserData] = useState(null);


  const fetchUserData = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      setUserData(data);
      console.log(data);
      
    } catch (error) {
      console.error(error.message);
      setUserData(null);
    }
  };







  return (
    <div className= {`${theme +"wrapper"} mainwrapper`}>
      <div className={`${theme +"continer"} maincontiner`}>
      <themecontext.Provider value={{theme,settheme}}>
    <Toggle></Toggle>
    <Search  onSearch={fetchUserData}></Search>
    <Main userData={userData}></Main>
    </themecontext.Provider>
    </div>
    </div>

  )
}

export default App
