import style from "./Home.module.css"
import Header from "./Components/Header"
import Do from "./Components/Do"
import Skill from "./Components/Skill"
import Service from "./Components/Service"
import Contact from "../Contact/Contact"
import Footer from "../Global/Footer"
import Project from "./Components/Project"
export default function Home() {
  return (
   <div className={style.main_home}>
      <Header/>
      <Do/>
      <Skill/>
      <Project/>
      <Service/>
      <Contact/>
      <Footer/>
   </div>
  )
}
