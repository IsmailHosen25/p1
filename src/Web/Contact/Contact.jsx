import React from "react";
import style from "./Contact.module.css";

import { FaLinkedinIn, FaFacebookF, FaTwitter,FaPhone } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { MdEmail,MdLocationOn } from "react-icons/md";

import { facebook, instagram, linkedin, twitter } from "../../data";

export default function Contact() {
  return (
    <div id="contact" className={style.contact}>

    <div className={style.container}>
      <main className={style.row}>
        <section className={`${style.col} ${style.left}`}>
          <div className={style.contactTitle}>
            <h2 className={style.h2}>Get In Touch</h2>
            <p className={style.p}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </p>
          </div>

          <div className={style.contactInfo}>
            <div className={style.iconGroup}>
              <div className={style.icon}>
                <FaPhone className={style.i}/>
              </div>
              <div className={style.details}>
                <span className={style.span}>Phone</span>
                <span className={style.span}>+00 110 111 00</span>
              </div>
            </div>

            <div className={style.iconGroup}>
              <div className={style.icon}>
                <MdEmail className={style.i}/>
              </div>
              <div className={style.details}>
                <span className={style.span}>Email</span>
                <span className={style.span}>name.tutorial@gmail.com</span>
              </div>
            </div>

            <div className={style.iconGroup}>
              <div className={style.icon}>
                <MdLocationOn className={style.i}/>
              </div>
              <div className={style.details}>
                <span className={style.span}>Location</span>
                <span className={style.span}>X Street, Y Road, San Fransisco</span>
              </div>
            </div>
          </div>

          <div className={style.socialMedia}>
            <a href={linkedin} className={style.alink} target="_blanck">
              <FaLinkedinIn className={style.aicon}/>
            </a> 
            <a href={twitter} className={style.alink} target="_blanck">
              <FaTwitter className={style.aicon}/>
            </a>
            <a href={facebook} className={style.alink} target="_blanck">
              <FaFacebookF className={style.aicon}/>
            </a>
            <a href={instagram} className={style.alink} target="_blanck">
              <IoLogoInstagram className={style.aicon}/>
            </a>
          </div>
        </section>

        <section className={`${style.col} ${style.right}`}>
          <form className={style.messageForm}>
            <div className={`${style.inputGroup} ${style.halfWidth}`}>
              <input className={style.input} type="text" name="" required="required" />
              <label>Your Name</label>
            </div>

            <div className={`${style.inputGroup} ${style.halfWidth}`}>
              <input className={style.input} type="email" name="" required="required" />
              <label>Email</label>
            </div>

            <div className={`${style.inputGroup} ${style.fullWidth}`}>
              <input className={style.input} type="text" name="" required="required" />
              <label>Subject</label>
            </div>

            <div className={`${style.inputGroup} ${style.fullWidth}`}>
              <textarea className={style.textarea} required="required"></textarea>
              <label>Say Something</label>
            </div>

            <div className={`${style.inputGroup} ${style.fullWidth}`}>
              <button className={style.button}>Send Message</button>
            </div>
          </form>
        </section>
      </main>
    </div>
    </div>
  );
}
