import React, { useState } from 'react'
import netflixlogo from "../../Netflix-Logo.png"
import {Link, useNavigate} from "react-router-dom"
import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  const navaigate = useNavigate();
  const [togglesearch,settogglesearch]=useState(false);

  const toggle=()=>{
    settogglesearch(!togglesearch);
  }

  return (
    <>
    <nav className="header">
        <img src={netflixlogo} alt="logo" onClick={()=>{navaigate("/")}} />
        <div>
            <Link to="/tvshow">TVShows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recentlyadded">Recently Added</Link>
            <Link to="/mylist">My List</Link>
        </div>
        <BiSearchAlt className='iconbutton' onClick={toggle}/>
    </nav>
    <div className='searchbar' style={{display:togglesearch?'block':'none',}}>
      <input  placeholder='Search Here....'/>
    </div>
    </>
  )
}

export default Header