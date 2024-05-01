import React ,{useEffect} from "react";
import style from "./Certificate.module.css";
import Nav from "../Global/Nav/Nav";
import PageHeading from "../Global/PageHeading/PageHeading";
import ImageGallery from "../Global/ImageGallery/ImageGallery";
import Contact from "../Contact/Contact";
import Footer from "../Global/Footer";
import imagesdata from "./certifyimgdata";
export default function Certificate() {
  return (
    <div className={style.certificate}>
      <Nav active={"certify"} service={"/#service"}/>
      <PageHeading
        title={"Certificate_"}
        desc={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eligendi voluptas quia."
        }
      />
      <div className={style.certificate_con}>
        <ImageGallery imagesdata={imagesdata} />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
