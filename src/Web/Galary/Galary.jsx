import React from 'react'
import style from "./Galary.module.css"
import PageHeading from '../Global/PageHeading/PageHeading'
import ImageGallery from '../Global/ImageGallery/ImageGallery'
import Contact from "../Contact/Contact"
import Footer from "../Global/Footer"
import imagesdata from './galaryimgdata'
export default function Galary() {
  return (
    <div className={style.galary}>
    <PageHeading title={"Galary_"}  desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eligendi voluptas quia."}/>
    <div className={style.galary_con}>  
      <ImageGallery imagesdata={imagesdata}/>
    </div>
    <Contact/>
    <Footer/>
    </div>
  )
}
