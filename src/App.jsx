import User from "./components/User"
import Activity from "./components/Activity"
import data from "./data.json"
import { useState } from "react"
function App() {
  const [active,setActive] = useState("weekly")
  const [darkMode,setDarkMode] = useState(true)
  const activity = data.map((item) =>
  {
    return (
      <Activity
      key= {item.title}
      title = {item.title}
      current = { active == "weekly" ? item.timeframes.weekly.current : active == "daily" ? item.timeframes.daily.current : item.timeframes.monthly.current} 
      previous = { active == "weekly" ? item.timeframes.weekly.previous : active == "daily" ? item.timeframes.daily.previous : item.timeframes.monthly.previous} 
      image = {item.image}
      color = {item.color}
      header = { active == "weekly" ? item.timeframes.weekly.header : active == "daily" ? item.timeframes.daily.header : item.timeframes.monthly.header} 
      darkMode = {darkMode}
     
      />
    )
  }
  ) 
  function daily(){
    setActive("daily")
  }
  function monthly(){
    setActive("monthly")
  }
  function weekly(){
    setActive("weekly")
  }
  function toggleSwitchHandler(){
     setDarkMode(prevdarkMode => !prevdarkMode)
  }
  return (
    <div className={`font-rubik pt-15 pb-20 ${darkMode ? "" : "dark"}`}>
      <User 
      handleClickDaily = {daily}
      handleClickMonthly = {monthly}
      handleClickWeekly = {weekly}
      darkMode = {darkMode}
      toggleSwitch = {toggleSwitchHandler}
      />
      {activity}
      
    </div>
  )
}

export default App
