export default function Activity(prop){
    return(
        <div className="mx-6 mt-4 ">
            <div className="overflow-hidden relative top-4 py-8 pr-3 rounded-t-2xl" style={{backgroundColor : prop.color}}>
            <img src={`/images/${prop.image}`} className="absolute right-8 -mt-8"></img>
            </div>
            <div className={`${prop.darkMode ? "bg-dark-blue" : "bg-random"} flex flex-col justify-between rounded-2xl p-6 relative cursor-pointer ${prop.darkMode ? "hover:bg-hover-blue" : "hover:bg-grayish"} ${prop.darkMode ? "active:bg-hover-blue" : "active:bg-grayish"}`}>
            <div className="flex justify-between items-center">
                <p className={`${prop.darkMode ? "text-white":"text-gray"} text-lg font-medium`}>{prop.title}</p>
                <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fillRule="evenodd" className="self-center hover:fill-white active:fill-white"/></svg> 
            </div>
            <div className="flex flex-row justify-between items-center sm:flex-col sm:items-start sm:pt-4 md:items-center md:flex-row md:pt-0 lg:items-start lg:pt-4 lg:flex-col">
                <p className={`${prop.darkMode ? "text-white":"text-gray"} text-3xl font-light sm:pb-2 md:pb-0 lg:pb-2 lg:text-5xl`}>{prop.current}{prop.current == 1 ? "hr" :"hrs"}</p>
                <p className={`${prop.darkMode ? "text-pale-blue":"text-gray"} text-sm  font-normal`}>{prop.header} - {prop.previous}{prop.previous == 1 ? "hr":"hrs"}</p>
            </div>
        </div>
        </div>
    )
}