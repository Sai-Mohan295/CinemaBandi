import React from 'react'
import CinemaBandiLogo from './CinemaBandiLogo.png'
// import MovieRide from './MovieRide.png'
import { Link } from 'react-router-dom'
import {FcSearch} from 'react-icons/fc'

const Header = () => {
  return (
    <nav className="header">
        <img src={CinemaBandiLogo} alt='Logo'/>
        <div>
            <Link to="/home">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/popularmovies">Popular</Link>
            <Link to="/aboutus">About/Contact</Link>
        </div>
        <FcSearch onClick={()=>alert("Hi Nice to meet you , Want to contact ? goto Contact section")} />
    </nav>
  )
}

export default Header