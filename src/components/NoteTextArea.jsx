import { useState } from "react"
import submitNote from '../assets/Vector-arrow.png'
import styles from './rightSection.module.css'

const NoteTextArea=({allNotes,setAllNotes,selectedGroup})=>{

    const [note, setNote]=useState("")

    const handleNoteSubmitClick=()=>{
        const data=JSON.parse(localStorage.getItem('groupsData'))
        data.map((item)=>{
            console.log(item)
            if(item.name===selectedGroup){
                item.notes=[...item.notes,{id:Date.now(),note:note}]
                console.log(item)
            }
        })
        localStorage.setItem('groupsData',JSON.stringify(data))
        setAllNotes([...allNotes,note])

    }

    return (
        <div className={styles.textbox}>
            <textarea 
            placeholder='Enter your text here...........' 
            value={note}
            onChange={(e)=>setNote(e.target.value)}
            >
            </textarea>
            <button onClick={handleNoteSubmitClick}><img src={submitNote} alt="submit note" /></button>
        </div>
    )
}

export default NoteTextArea