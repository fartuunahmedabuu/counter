import React, { useState } from "react"
import {createRoot} from "react-dom/client"
import "./styl.css"
// import Light from "./components/Light"
import Tasbiix from "./components/Tasbiix"



const root = document.getElementById("root")

createRoot(root).render(
<div>
 {/* <Light /> */}
  <Tasbiix/>
 </div>

  
)
