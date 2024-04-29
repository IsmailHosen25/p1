import React, { useState } from 'react'
import style from "./Nav.module.css"
import { Link } from 'react-router-dom'
import {logo_name} from  '../../../data'
export default function Nav() {
    const [active, setactive]=useState("home")
  return (
    <div className={style.nav}>
        <div className={style.navcon}>
            <div className={style.logo}>
               <p className={style.logo_name}>{logo_name}</p>
               <Link to={"/"}onClick={()=>setactive("home")} className={`${style.link} ${active==="home"? style.active:""}`}>Home</Link>
            </div>
            <div className={style.navlink}>
              <Link to={"/certificate"} onClick={()=>setactive("certify")} className={`${style.link} ${active==="certify"? style.active:""}`}>Certificate</Link>
              <Link to={"/galary"} onClick={()=>setactive("galary")} className={`${style.link} ${active==="galary"? style.active:""}`}>Galary</Link>
              <Link to={"/about"} onClick={()=>setactive("about")} className={`${style.link} ${active==="about"? style.active:""}`}>About</Link>
              <Link to={"/service"} onClick={()=>setactive("service")} className={`${style.link} ${active==="service"? style.active:""}`}>Service</Link>
              <Link to={"/contact"} onClick={()=>setactive("contact")} className={`${style.link} ${active==="contact"? style.active:""}`}>Contact</Link>
            </div>
        </div>
    </div>
  )
}
