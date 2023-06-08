import User from "./components/User"
import Activity from "./components/Activity"
import data from "./data.json"
import { useState } from "react"
function App() {
  const [active,setActive] = useState("weekly")
  const [darkMode,setDarkMode] = useState(true)
  const [color,setColor] = useState("weeklycolor")
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
    setColor("dailycolor")
  }
  function monthly(){
    setActive("monthly")
    setColor("monthlycolor")
  }
  function weekly(){
    setActive("weekly")
    setColor("weeklycolor")
  }
  function toggleSwitchHandler(){
     setDarkMode(prevdarkMode => !prevdarkMode)
  }
  return (
    <div className={`lg:flex lg:flex-col ${darkMode ? "" : "dark"} min-h-screen justify-center`}>
    <div className="flex justify-end items-center mt-8 lg:mx-auto">
    <img src={darkMode ? "/images/moon-on.svg" : "/images/moon.svg"} alt="moon" className="block"></img>
    <img src={darkMode ? "/images/toggle-off.svg" : "/images/toggle-on.svg"} alt="toggle" className="mx-3 ml-5  hover:cursor-pointer block "onClick={toggleSwitchHandler}></img>
    <img src={darkMode ? "/images/sun.svg" : "/images/sun-on.svg"} alt="sun" className="mr-6 px-0 block "></img>
    </div>
    <div className="font-rubik pt-15 pb-20  lg:flex justify-center items-center">
      <div className="lg:w-1/4 xl:w-80">
      <User
      handleClickDaily = {daily}
      handleClickMonthly = {monthly}
      handleClickWeekly = {weekly}
      darkMode = {darkMode}
      toggleSwitch = {toggleSwitchHandler}
      color = {color}
      />
      </div>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:w-4/6 xl:w-200">
      {activity}
      </div>
      
    </div>
    </div>
  )
}

export default App
