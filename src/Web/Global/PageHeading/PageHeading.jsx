import React from 'react'
import style from "./PageHeading.module.css"
export default function PageHeading({title}) {
  return (
<div className={style.pageHeading}>
    <h1 className={style.heading}>{title}</h1>
 </div>
  )
}
