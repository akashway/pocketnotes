import React, { useEffect, useState } from "react";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

import './index.css'

const App = () => {
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [groupNotes, setGroupNotes] = useState({});
  const [homePage,setHomePage]=useState(true)


  const updateGroupNotes = (groupName, notes) => {
    console.log("groupNotes", groupNotes)
    const localStorageData = JSON.parse(localStorage.getItem('groupsData'))
    localStorageData.map(data => {
      if (data.name === selectedGroup.name) {
        data[selectedGroup.name] = notes
      }
      console.log("after local storage data", data)
    })
    localStorage.setItem('groupsData', JSON.stringify(localStorageData))
    setGroupNotes(() => ({ [groupName]: notes }))
  }


  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('groupsData'))
    if (localStorageData && selectedGroup) {
      localStorageData.map(data => {
        if (data.name === selectedGroup.name) {
          console.log("a", selectedGroup)
          console.log("b", data[selectedGroup.name])
          console.log(selectedGroup)
          console.log({[selectedGroup.name]:"Akash"})
          setGroupNotes({ [selectedGroup.name]: data[selectedGroup.name] })
        }
      })
    }
  }, [selectedGroup])


  return (
    <div className="main-container">
      <LeftSection
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
        homePage={homePage}
        setHomePage={setHomePage}
      />

      <RightSection
        selectedGroup={selectedGroup}
        notes={groupNotes[selectedGroup?.name] || []}
        updateGroupNotes={(notes) => updateGroupNotes(selectedGroup.name, notes)} 
        homePage={homePage}
        setHomePage={setHomePage}
        />

    </div>
  )
}

export default App