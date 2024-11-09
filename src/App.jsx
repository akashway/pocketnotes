import React, { useEffect, useState } from "react";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

import './index.css'

const App = () => {
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [groupNotes, setGroupNotes] = useState({});


  const updateGroupNotes = (groupName, notes) => {
    console.log("groupNotes",groupNotes)
    const localStorageData=JSON.parse(localStorage.getItem('groupsData'))
    localStorageData.map(data=>{
      if(data.name===selectedGroup){
        data[selectedGroup]=notes
      }
      console.log("after local storage data",data)
    })
    localStorage.setItem('groupsData',JSON.stringify(localStorageData))
    setGroupNotes(() => ({[groupName]: notes }))
  }


  useEffect(()=>{
      const localStorageData=JSON.parse(localStorage.getItem('groupsData'))
      localStorageData.map(data=>{
        if(data.name===selectedGroup){
          console.log("a",selectedGroup)
          console.log("b",data[selectedGroup])
          setGroupNotes({[selectedGroup]:data[selectedGroup]})
        }
      })
  },[selectedGroup])


  return (
    <div className="main-container">
      <LeftSection setSelectedGroup={setSelectedGroup} />
      
      <RightSection
        selectedGroup={selectedGroup}
        notes={groupNotes[selectedGroup] || []}
        updateGroupNotes={(notes) => updateGroupNotes(selectedGroup, notes)} />
    </div>
  )
}

export default App