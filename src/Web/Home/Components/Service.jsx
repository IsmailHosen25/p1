import React from 'react'
import style from "./Service.module.css"
import Canva from "../../../assets/canva.png"

import pencil from "../../../assets/pencil.png"
import calender from "../../../assets/calander.png"
import lightbulb from "../../../assets/lightbulb.png"

const items=[{
    title:"Sample Headline",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img:pencil
 },{
    title:"Sample Headline",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img:calender
 },{
    title:"Sample Headline",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img:calender
 },{
    title:"Sample Headline",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img:lightbulb
 },{
    title:"Sample Headline",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img:pencil
 },{
    title:"Sample Headline",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img:pencil
 },{
    title:"Sample Headline",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img:lightbulb
 },{
    title:"Sample Headline",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img:calender
 },
 
 ]

export default function Service() {
  return (
    <div id='service' className={style.service} >
        <div className={style.service_con}>
           <h1 className={style.h1}>
            Why Choose me ?
           </h1>
           <div className={style.service_div}>
            {items.map((item,i)=><div key={i} className={style.service_item}>
                <img className={style.item_img} src={item.img}/>
                <div className={style.item_div}>
                    <h3 className={style.item_heading}><strong>{item.title}</strong></h3>
                    <p className={style.item_desc}>{item.desc}</p>
                </div>
             </div>)}
             
           </div>
        </div>
    </div>
  )
}
