import React from 'react'
import style from "./PageHeading.module.css"
export default function PageHeading({title,desc}) {
  return (
<div className={style.pageHeading}>
  <div className={style.innerdiv}>
    <h1 className={style.heading}>{title}</h1>
    <p className={style.para}>{desc}</p>
  </div>
 </div>
  )
}
