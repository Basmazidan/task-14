import "./Search.css"
import searchbar from '../../assets/images/Shape 2.svg'
import { useContext } from "react"
import { themecontext } from "../../App"
const Search = () => {
    const datapassed = useContext(themecontext);
    console.log(datapassed.theme);
    

  return (
    <div  className={`${datapassed.theme +"search"} p`} >
        <img src={searchbar} alt="" />
        <input type="text"   placeholder="Search GitHub username…" className={`${datapassed.theme +"inpsearch"} inp-search`} />
        <button className={datapassed.theme + "btn"}>search</button>
    </div>
  )
}

export default Search