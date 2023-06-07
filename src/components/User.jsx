export default function User(prop){
    return(
        <>
        <div className="flex justify-end items-center mt-16">
        <img src={prop.darkMode ? "src/assets/images/moon-on.svg" : "src/assets/images/moon.svg"} alt="moon" className="block"></img>
        <img src={prop.darkMode ? "src/assets/images/toggle-off.svg" : "src/assets/images/toggle-on.svg"} alt="toggle" className="mx-3 ml-5  hover:cursor-pointer block "onClick={prop.toggleSwitch}></img>
        <img src={prop.darkMode ? "/src/assets/images/sun.svg" : "/src/assets/images/sun-on.svg"} alt="sun" className="mr-6 px-0 block "></img>
        </div>
        <div className={`${prop.darkMode ? "bg-dark-blue" : "bg-random"} mx-6  mt-4 rounded-2xl `}>
            <div className="bg-violet text-white flex flex-row items-center p-6 rounded-2xl">
                <img src="/src/assets/images/image-jeremy.png" alt="user-image" className="border-white border-4 rounded-full w-20 mr-6"></img>
                <div>
                    <p className={`font-light text-lg ${prop.darkMode ? "text-pale-blue" : " text-navy-blue"}`}>Report for</p>
                    <p className={`text-2xl font-light ${prop.darkMode ? "text-pale-blue" : " text-navy-blue"}`}>Jeremy Robson</p>
                </div>
            </div>
            <div className="text-desaturated flex justify-around py-4 text-lg">
                <button onClick={prop.handleClickDaily} className="hover:text-white active:text-white">Daily</button>
                <button onClick={prop.handleClickWeekly} className="hover:text-white active:text-white">Weekly</button>
                <button onClick = {prop.handleClickMonthly} className="hover:text-white active:text-white">Monthly</button>
            </div>
        </div>
        </>
    )
}
