import React from 'react'
import "./SlideBar.css"
import Home from '../Home/Home'
import logo from "../../Image/LOGO.jpg"
import { FcOnlineSupport } from "react-icons/fc";
import { FcRightUp2 } from "react-icons/fc";
import QAComponent from '../QAComponent/QAComponent';
const SlideBar = () => {
  return (
    <div className='slidebar'>
        <div className='navbar-items container-fluid'>
            <div className='logo'>
                <img src={logo} alt="LOGO"/>
            </div>

            <div className='question'>
                <div><FcOnlineSupport size={35}/>Ask Questions</div>
            </div>
            <div className='history'>
                <div><FcRightUp2 size={35}/>History</div>
            </div>
        </div>
    </div>

  )
}

export default SlideBar