import { useState } from 'react'

import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import Logo from '../images/logo.png'
import { links } from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'


function Navbar() {
    const [isNavShowing, setIsNavShowing] = useState(false);


  return (
    <nav>
        <div className='container nav_container'>
            <Link to='/' className= 'logo' onClick={() => setIsNavShowing(false)}>
                <img src={Logo} alt="Nav Logo" />
            </Link>

            {/* 采用了模板字符串 */}
            <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}> 
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active_nav': '' }
                                >{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>

            <button className="nav_toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                {
                    isNavShowing ? <GoThreeBars/> : <MdOutlineClose/>
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar