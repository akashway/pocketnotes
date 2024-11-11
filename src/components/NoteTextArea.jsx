import { useState,useEffect } from "react"
import disbaleSubmitNote from '../assets/Vector-arrow.png'
import enableSubmitNote from '../assets/Vector (1).png'
import styles from './rightSection.module.css'

const NoteTextArea=({ notes, updateGroupNotes })=>{

    const [note, setNote]=useState("")
    const [textArea,setTextArea]=useState(false)

    const handleNoteSubmitClick = (e) => { 
        e.preventDefault()
        updateGroupNotes([...notes,{id:Date.now(),note:note}])
        setNote('')
    }

    const handleEnterKeyPress=(e)=>{
        if(e.key==='Enter' && !e.shiftKey){
            e.preventDefault()
            textArea?handleNoteSubmitClick(e):alert("nothing entered on notes")
        }
    }

    useEffect(()=>{
        if(note.trim()){
            setTextArea(true)
        }
        else{
            setTextArea(false)
        }
    },[note])

    return (
        <form className={styles.textbox} onSubmit={handleNoteSubmitClick}>
            <textarea 
            placeholder='Enter your text here...........' 
            value={note}
            onChange={(e)=>setNote(e.target.value)}
            onKeyPress={handleEnterKeyPress}
            >
            </textarea>
            <button 
            type="submit" disabled={!(textArea)}><img src={textArea?enableSubmitNote:disbaleSubmitNote} alt="submit note" /></button>
        </form>
    )
}

export default NoteTextArea