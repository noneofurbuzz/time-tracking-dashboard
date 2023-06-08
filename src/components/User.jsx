export default function User(prop){
    return(
        <div className="lg:-mb-4">
        <div className={`${prop.darkMode ? "bg-dark-blue" : "bg-random"} mx-6 mt-4 rounded-2xl`}>
            <div className="bg-violet text-white flex flex-row items-center p-6 rounded-2xl lg:flex lg:flex-col lg:items-start">
                <img src="/images/image-jeremy.png" alt="user-image" className="border-white border-4 rounded-full w-20 mr-6 "></img>
                <div className="lg:my-9">
                    <p className={`font-light text-lg ${prop.darkMode ? "text-pale-blue" : " text-navy-blue"}`}>Report for</p>
                    <p className={`text-2xl font-light lg:text-4xl ${prop.darkMode ? "text-white" : " text-navy-blue"} lg:flex lg:flex-col`}><span>Jeremy </span><span>Robson</span></p>
                </div>
            </div>
            <div className="flex justify-around py-4 text-lg lg:flex-col lg:items-start lg:mx-6">
                <button onClick={prop.handleClickDaily} className={`${prop.darkMode ? "hover:text-white" : "hover:text-violet"} text-desaturated ${prop.color == "dailycolor" ? (prop.darkMode ? "text-white" : "text-violet"):"text-desaturated"} lg:my-2`}>Daily</button>
                <button onClick={prop.handleClickWeekly} className={`${prop.darkMode ? "hover:text-white" : "hover:text-violet"} text-desaturated ${prop.color == "weeklycolor" ? (prop.darkMode ? "text-white" : "text-violet") : "text-desaturated"} lg:my-2`}>Weekly</button>
                <button onClick = {prop.handleClickMonthly} className={`${prop.darkMode ? "hover:text-white" : "hover:text-violet"} ${prop.color == "monthlycolor" ? (prop.darkMode ? "text-white" : "text-violet"):"text-desaturated"} text-desaturated lg:mt-2`}>Monthly</button>
            </div>
        </div>
        </div>
    )
}
