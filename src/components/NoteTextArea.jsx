import { useState } from "react"
import submitNote from '../assets/Vector-arrow.png'
import styles from './rightSection.module.css'

const NoteTextArea=({ notes, updateGroupNotes })=>{

    const [note, setNote]=useState("")

    const handleNoteSubmitClick = () => { 
        console.log("clicked-1",note)
        updateGroupNotes([...notes,{id:Date.now(),note:note}])
        setNote('')
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