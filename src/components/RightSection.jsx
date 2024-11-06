import styles from './rightSection.module.css'
import noteImage from '../assets/image-removebg-preview 1.png'
import NoteTextArea from './NoteTextArea'
import AllNotes from './AllNotes'
import { useState } from 'react'

const RightSection = ({ selectedGroup }) => {

    const [allNotes,setAllNotes]=useState([])

    return (
        selectedGroup ?
            <div className={styles['right-container']}>
                <p>{selectedGroup}</p>
                <AllNotes allNotes={allNotes} setAllNotes={setAllNotes} selectedGroup={selectedGroup}/>
                <NoteTextArea allNotes={allNotes} setAllNotes={setAllNotes} selectedGroup={selectedGroup} />
            </div>
            :
            <div className={`${styles['right-container']} ${styles['default-container']}`}>
                <div className={styles['logo-info']}>
                    <img
                        src={noteImage}
                        alt="Pocket notes logo"
                    />
                    <h1>Pocket Notes</h1>
                    <p>Send and receive messages without keeping your phone online.
                        Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                </div>
            </div>

    )
}

export default RightSection