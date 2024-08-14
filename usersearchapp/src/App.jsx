import Toggle from './components/Toggle/Toggle'
import './App.css'
import Search from './components/search/Search';
import Main from './components/main/Main';
import { createContext, useState } from 'react'

export const themecontext =createContext(null);
function App() {
  const [theme,settheme]=useState("light")

  return (
    <div className= {`${theme +"wrapper"} mainwrapper`}>
      <div className={`${theme +"continer"} maincontiner`}>
      <themecontext.Provider value={{theme,settheme}}>
    <Toggle></Toggle>
    <Search></Search>
    <Main></Main>
    </themecontext.Provider>
    </div>
    </div>

  )
}

export default App
