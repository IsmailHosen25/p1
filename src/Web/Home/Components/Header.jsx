import React from 'react'
import style from "./Header.module.css"
import { name } from '../../../data'
import {profession} from '../../../data'
import img from "../../../assets/Hasan.jpg"
import { FaLinkedinIn,FaFacebookF,FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

import { facebook,instagram,linkedin,twitter } from '../../../data'

export default function Header() {
  return (
    <div className={style.home}>
    <div className={style.home_con}>
        <div className={style.img_info}>
         <img src={img} className={style.img}/>
         <div className={style.info}>
             <p className={style.name}>{name}</p>
             <p className={style.profe}>_{profession}</p>
             <button className={style.btn}>Download CV</button>
         </div>
        </div>
        <div className={style.social_link}>
           <a href={linkedin} target='_blanck'  className={style.alink}><FaLinkedinIn /></a>
           <a href={twitter} target='_blanck' className={style.alink}><FaTwitter/></a>
           <a href={facebook} target='_blanck' className={style.alink}><FaFacebookF/></a>
           <a href={instagram} target='_blanck' className={style.alink}><IoLogoInstagram/></a>
        </div>
    </div>
 </div>
  )
}
