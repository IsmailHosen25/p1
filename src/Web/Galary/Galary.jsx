import React,{useEffect} from "react";
import style from "./Galary.module.css";
import Nav from "../Global/Nav/Nav";
import PageHeading from "../Global/PageHeading/PageHeading";
import ImageGallery from "../Global/ImageGallery/ImageGallery";
import Contact from "../Contact/Contact";
import Footer from "../Global/Footer";
import imagesdata from "./galaryimgdata";
export default function Galary() {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  },[])
  return (
    <div className={style.galary}>
      <Nav active={"gallery"} service={"/#service"}/>
      <PageHeading
        title={"Galary_"}
        desc={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eligendi voluptas quia."
        }
      />
      <div className={style.galary_con}>
        <ImageGallery imagesdata={imagesdata} />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
