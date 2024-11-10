import styles from './rightSection.module.css'
import noteImage from '../assets/image-removebg-preview 1.png'
import privacyIcon from '../assets/Vector.png'
import arrowIcon from '../assets/arrow.png'

import NoteTextArea from './NoteTextArea'
import AllNotes from './AllNotes'
import { useState } from 'react'

const RightSection = ({ selectedGroup, notes, updateGroupNotes, homePage, setHomePage }) => {


    const backPageClickHandle=()=>{
        setHomePage(true)
    }


    const CalculateInitialsName = ({ name, color }) => {
        let flag = 0
        let firstChar
        let nextChar
        for (let i = 0; i < name.length-1; i++) {
            if (i === 0) {
                firstChar = name[0].toUpperCase()
            }
            else {
                if (name[i] === " ") {
                    flag = 1
                    nextChar = name[i + 1].toUpperCase()
                    break
                }
            }

            if (flag === 0) {
                nextChar = name[1].toUpperCase()
            }
        }
        return (
            <span style={{ backgroundColor: color }} className="initials">
                {`${firstChar}${nextChar}`}
            </span>
        )
    }

    return (
        selectedGroup ?
            <div className={homePage?`${styles['right-container']} ${styles['right-container-deactive']}`:`${styles['right-container']}`}>
                <div className={styles['main-header']}>
                    <div className={styles['back-page']} onClick={backPageClickHandle}>{homePage?"":<img src={arrowIcon}/>}</div>
                    <CalculateInitialsName name={selectedGroup.name} color={selectedGroup.color} /> {selectedGroup.name}
                </div>
                <AllNotes notes={notes} />
                <NoteTextArea notes={notes} updateGroupNotes={updateGroupNotes} />
            </div>
            :
            <div className={styles['default-container']}>
                <div className={styles['logo-info']}>
                    <img
                        src={noteImage}
                        alt="Pocket notes logo"
                    />
                    <h1>Pocket Notes</h1>
                    <p>Send and receive messages without keeping your phone online.
                        Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                </div>
                <div className={styles['encryption-message']}>
                    <img src={privacyIcon} alt="Privacy Icon" />end-to-end encrypted
                </div>
            </div>

    )
}

export default RightSection