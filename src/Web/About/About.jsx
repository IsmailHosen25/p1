import React from 'react'
import style from "./About.module.css"
import PageHeading from '../Global/PageHeading/PageHeading'
import Contact from '../Contact/Contact'
import Footer from '../Global/Footer'
import Aboutheader from './Components/Aboutheader'
import EducationCard from './Components/EducationCard'
import {education} from "./Educationdata"
export default function About() {
  return (
    <div className={style.about}>
    <PageHeading title={"About_"}  desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eligendi voluptas quia."}/>
    <Aboutheader/>
    <div className={style.education_sec}>
      <div className={style.section_desc}>
        <h1 className={style.section_title}>Education</h1>
        <p className={style.section_p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className={style.eduction_item}>
        {education.map((item,i)=><EducationCard education={item}/>)}
      </div>
    </div>
    <Contact/>
    <Footer/>
    </div>
  )
}