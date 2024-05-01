import style from "./Home.module.css"
import Header from "./Components/Header"
import Do from "./Components/Do"
import Skill from "./Components/Skill"
import Service from "./Components/Service"
import Contact from "../Contact/Contact"
import Footer from "../Global/Footer"
import Project from "./Components/Project"
import Nav from "../Global/Nav/Nav"
import { useEffect,useRef } from "react"
export default function Home() {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  },[])
  return (
   <>
      <Nav active={"home"}  service={"#service"}/>
      <Header/>
      <Do/>
      <Skill/>
      <Project/>
      <Service />

      <Contact/>
      <Footer/>
   </>
  )
}
