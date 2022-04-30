import React, { useState } from 'react'
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  let navList = [
    {
      id: 1,
      href: '#',
      icon: <AiOutlineHome />
    },
    {
      id: 2,
      href: '#about',
      icon: <AiOutlineUser />
    },
    {
      id: 3,
      href: '#experience',
      icon: <BiBook />
    },
    {
      id: 4,
      href: '#services',
      icon: <RiServiceLine />
    },
    {
      id: 5,
      href: '#contact',
      icon: <BiMessageSquareDetail />
    }
  ];
  return (
    <nav>
      {navList.map((navItem, i) => {
        return <a key={navItem.id} key={i} href={navItem.href} className={activeNav === navItem.href ? 'active' : ''} onClick={()=> setActiveNav(navItem.href)}> {navItem.icon}</a>
      })}
    </nav>
  )
}

export default Nav