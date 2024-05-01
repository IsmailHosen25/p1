import React, { useEffect, useState } from 'react'
import style from "./Nav.module.css"
import { Link,useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import {logo_name} from  '../../../data'
export default function Nav({active,service}) {
  const navigate =useNavigate()
    useEffect(()=>{
      
    },[])
  return (
    <div className={style.nav}>
        <div className={style.navcon}>
            <div className={style.logo}>
               <p className={style.logo_name}>{logo_name}</p>
               <Link to={"/"} className={`${style.link} ${active==="home"? style.active:""}`}>Home</Link>
            </div>
            <div className={style.navlink}>
              <Link to={"/certificate"}  className={`${style.link} ${active==="certify"? style.active:""}`}>Certificate</Link>
              <Link to={"/gallery"}  className={`${style.link} ${active==="gallery"? style.active:""}`}>Gallery</Link>
              <Link to={"/about"}  className={`${style.link} ${active==="about"? style.active:""}`}>About</Link>
              <HashLink to={service}  className={`${style.link} ${active==="service"? style.active:""}`}>Service</HashLink>
              <HashLink to={"#contact"}  className={`${style.link} ${active==="contact"? style.active:""}`}>Contact</HashLink>
            </div>
        </div>
    </div>
  )
}
