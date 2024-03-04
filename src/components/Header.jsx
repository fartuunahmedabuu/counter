import { useState } from "react"

 
 function Header(){
    const [isOpen, setIsOpen]= useState(false)

    //fuction that handles open action
    const handleOpen = () => {
        setIsOpen(true)
        
        
    }

    //fuction that handleClose
    
    const handleClose = () => {
        setIsOpen(false)
    }
    return(
        <div>
        <div className="bg-green-800 flex  justify-between p-6 text-white font-bold text-center">
        <h1>Tasbiix</h1>

        <i style={{display: isOpen == true ? "none " : "" }}  onClick={handleOpen} class="fa-solid fa-bars text-5xl sm:hidden"></i>
        <i style={{display: isOpen == true ? "block" : "none" }} onClick={handleClose} class="fa-solid fa-x text-4xl"></i>
        <ul className="hidden sm:flex gap-16 text-3xl">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Bloges</li>
        </ul>

        </div>
        <ul style={{display: isOpen == true ? "flex" : ""}} className=" hidden  bg bg-orange-700  absolute  text-white flex-col space-y-5 p-2  text-3xl">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Bloges</li>
        </ul>
        
        </div>
    )
}

export default Header