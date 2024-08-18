import "./Search.css"
import searchbar from '../../assets/images/Shape 2.svg'
import { useContext,useState } from "react"
import { themecontext } from "../../App"
const Search = ({onSearch}) => {
  const[username,setUsername]=useState('');

  function handlesearch(){
    if (username.trim() !== '') {
      onSearch(username);
  }
}

    const datapassed = useContext(themecontext);
    console.log(datapassed.theme);

    function handleonchange(e){
      setUsername(e.target.value)
    }

  return (
    <div  className={`${datapassed.theme +"search"} p`} >
        <img src={searchbar} alt="" />
        <input onChange={handleonchange}
         type="text" value={username}  placeholder="Search GitHub username…" className={`${datapassed.theme +"inpsearch"} inp-search`} />
        <button onClick={handlesearch} className={datapassed.theme + "btn"}>search</button>
    </div>
  )
}

export default Search