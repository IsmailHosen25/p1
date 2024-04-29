import style from "./Home.module.css"
import Header from "./Components/Header"
import Do from "./Components/Do"
import Skill from "./Components/Skill"
import Service from "./Components/Service"
export default function Home() {
  return (
   <div className={style.main_home}>
      <Header/>
      <Do/>
      <Skill/>
      <Service/>
   </div>
  )
}
