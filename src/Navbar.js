import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {

  const {openSidebar ,openSubmenu,closeSubmenu} = useGlobalContext();

  const displaySubmenu = (e)=>{
    // console.log(e.target)
    const page = e.target.textContent;
    console.log(page);
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right)/2;
    const bottom = tempBtn.bottom -3;
    openSubmenu(page,{center , bottom});
   
    //openSubmenu();
  }

  const handelMoveOver =(e)=>{
      if(!e.target.classList.contains('link-btn'))
      {
        closeSubmenu();
      }
  }
  return <>
    <nav className='nav' onMouseOver={handelMoveOver}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt="stripe"/>
          <button  className='btn toggle-btn' onClick={openSidebar}>
            <FaBars/>
          </button>
        </div>
        <ul className='nav-links'>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
              products
              </button>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
              </button>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
              company
              </button>
            </li>
        </ul>
        <button className='btn signin-btn'>signin</button>
      </div>
    </nav>

  </>
}

export default Navbar
