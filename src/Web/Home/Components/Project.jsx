import React from 'react'
import style from "./Projcect.module.css"
import project1 from "../../../assets/project.jpg"
export default function Project() {
  return (
    <div className={style.project}>
        <div className={style.project_con}>
           <h1 className={style.heading}>Project.</h1>
           <div className={style.items}>
               
               <div className={style.item}>
                   <img className={style.img} src={project1}/>
                   <div className={style.item_desc1}>
                        <h2 className={style.h1}>Head line</h2>
                        <p className={style.p}><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong></p>
                   </div>
               </div>
               <div className={style.item}>
                   <img className={style.img} src={project1}/>
                   <div className={style.item_desc2}>
                        <h2 className={style.desc2_h1}>Head line</h2>
                        <p className={style.p}><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong></p>
                   </div>
               </div>
               <div className={style.item}>
                   <img className={style.img} src={project1}/>
                   <div className={style.item_desc1}>
                        <h2 className={style.h1}>Head line</h2>
                        <p className={style.p}><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong></p>
                   </div>
               </div>
               <div className={style.item}>
                   <img className={style.img} src={project1}/>
                   <div className={style.item_desc2}>
                        <h2 className={style.desc2_h1}>Head line</h2>
                        <p className={style.p}><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong></p>
                   </div>
               </div>
               <div className={style.item}>
                   <img className={style.img} src={project1}/>
                   <div className={style.item_desc1}>
                        <h2 className={style.h1}>Head line</h2>
                        <p className={style.p}><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong></p>
                   </div>
               </div>
               <div className={style.item}>
                   <img className={style.img} src={project1}/>
                   <div className={style.item_desc2}>
                        <h2 className={style.desc2_h1}>Head line</h2>
                        <p className={style.p}><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong></p>
                   </div>
               </div>

           </div>
        </div>
    </div>
  )
}
