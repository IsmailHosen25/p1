import React from 'react'
import style from "./Aboutheader.module.css"
import {name} from "../../../data"
import img from "../../../assets/Hasan.jpg"
export default function Aboutheader() {
  return (
    <div className={style.div}>
      <div className={style.inner_div}>
        <div className={style.self_info}>
          <div className={style.name_desc}>
             <h2 className={style.name}>{name}</h2>
             <p className={style.desc}>I'am a digital designer in love with photography, pointing and discovering new wolds and culture.</p>
          </div>
          <div className={style.gen_info}>
             <h2 className={style.gen_title}>Genaral <span className={style.span}>Info :</span></h2>
             <div className={style.info_items}>
                <div className={style.item}>
                    <h3 className={style.item_h1}>Date of Birth -</h3>
                    <p className={style.item_p}>Aug 25, 2002</p>
                </div>
                <div className={style.item}>
                    <h3 className={style.item_h1}>Address -</h3>
                    <p className={style.item_p}>Rosia Road 55, Gibratar, Dhaka </p>
                </div>
                <div className={style.item}>
                    <h3 className={style.item_h1}>E-mail -</h3>
                    <p className={style.item_p}>ouragency@gmail.com</p>
                </div>
                <div className={style.item}>
                    <h3 className={style.item_h1}>Number -</h3>
                    <p className={style.item_p}>01XXXXXXXXX</p>
                </div>
                <button className={style.btn}>Download CV</button>
             </div>
          </div>
        </div>
        <img className={style.img} src={img}/>
      </div>
    </div>
  )
}
