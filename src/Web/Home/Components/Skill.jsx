import React from 'react'
import style from "./Skill.module.css"
import ms from "../../../assets/ms.png"
import msex from "../../../assets/msexcel.png"
import canva from "../../../assets/canva.png"
import msp from "../../../assets/mspowerpoint.png"
const items=[{
   name:"Microsoft word",
   img:ms
},{
    name:"Canva",
    img:canva
},{
    name:"Microsoft Excel",
    img:msex
 },{
     name:"Microsoft PowerPoint",
     img:msp
 },
 {
    name:"Microsoft word",
    img:ms
 },{
     name:"Canva",
     img:canva
 },{
     name:"Microsoft Excel",
     img:msex
  },{
      name:"Microsoft PowerPoint",
      img:msp
  },
  {
    name:"Microsoft word",
    img:ms
 },{
     name:"Canva",
     img:canva
 },{
     name:"Microsoft Excel",
     img:msex
  },{
      name:"Microsoft PowerPoint",
      img:msp
  }

]
export default function Skill() {
  return (
    <div className={style.skill}>
        <div className={style.skill_con}>
           <h1 className={style.h1}>
            Skill.
           </h1>
           <div className={style.skill_div}>
            {items.map((item,i)=>  <div key={i} className={style.skill_item}>
                  <h3 className={style.item_heading}>{item.name}</h3>
                  <img className={style.item_img} src={item.img}/>
              </div>)}
            
           </div>
        </div>
    </div>
  )
}
