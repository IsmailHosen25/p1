import React from 'react'
import style from "./Do.module.css"
export default function Do() {
  return (
    <div className={style.do}>
       <div className={style.do_con}>
         <h2 className={style.heading}>What I do:</h2>
         <p className={style.do_info}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quas sequi maxime porro delectus, non provident ipsam odio labore nesciunt, laborum libero? Harum consequatur accusantium omnis, qui rerum nihil temporibus.
         </p>
       </div>
    </div>
  )
}
