import React from 'react'
import "./SlideBar.css"
import Home from '../Home/Home'
import logo from "../../Image/LOGO.jpg"
import { FcOnlineSupport } from "react-icons/fc";
import { FcRightUp2 } from "react-icons/fc";
import {Link} from 'react-router-dom'
import { FcLibrary } from "react-icons/fc";
import {NavLink} from 'react-router-dom'
const SlideBar = () => {
  return (
    <div className='slidebar'>
        <div className='navbar-items container-fluid'>
            <div className='logo'>
                <img src={logo} alt="LOGO"/>
            </div>
            <NavLink to='/' activeClassName="active">
                <div className='home-section' >
                    <div><FcLibrary size={35}/>Home</div>
                </div>
            </NavLink>
            <NavLink to='/question' activeClassName="active">
                <div className='question'>
                    <div><FcOnlineSupport size={35}/>Ask Questions</div>
                </div>
            </NavLink>
            <NavLink to='/history' activeClassName="active">
                <div className='history'>
                    <div><FcRightUp2 size={35}/>History</div>
                </div>
            </NavLink>
        </div>
    </div>

  )
}

export default SlideBar