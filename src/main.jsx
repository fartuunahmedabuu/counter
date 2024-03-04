import React, { useState } from "react"
import {createRoot} from "react-dom/client"
import "./styl.css"
import Header from "./components/Header"
// import Light from "./components/Light"
import Tasbiix from "./components/Tasbiix"
// import Image from "./components/Image"



const root = document.getElementById("root")

createRoot(root).render(
<div>
<Header/>
{/* <Image/> */}
 {/* <Light /> */}
  <Tasbiix/>
 
 </div>

  
)
