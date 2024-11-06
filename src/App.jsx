import React, { useState } from "react";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

import './index.css'

const App=()=>{
  const [selectedGroup,setSelectedGroup]=useState("")

  return(
    <div className="main-container">
      <LeftSection setSelectedGroup={setSelectedGroup} />
      <RightSection selectedGroup={selectedGroup}/>
    </div>
  )
}

export default App