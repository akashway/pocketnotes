import styles from './leftSection.module.css'
import addGroupIcon from '../assets/Group 24.png'
import { useState, useEffect, useDebugValue } from 'react'

import Modal from './Modal'

const LeftSection = ({ selectedGroup, setSelectedGroup, homePage, setHomePage }) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [allGroupName, setAllGroupName] = useState([])

    const handleClick = (e) => {
        e.stopPropagation()
        setIsModalOpen(prev => !prev)
    }


    const closeModel = (e) => {
        const modelRef = document.querySelector('form')
        if (modelRef && !modelRef.contains(e.target)) {
            console.log("inside")
            setIsModalOpen(false)
        }
        else {
            console.log("outside")
        }
    }

    const handleSelectedGroup = (data) => {
        setSelectedGroup(data)
        setHomePage(false)
    }

    const CalculateInitialsName = ({ data }) => {
        const { name, color } = data
        let blankSpaceCount=0
        let firstChar=""
        let nextChar=""

        let nameWithoutExtraSpaces=name.replace(/\s+/g,' ').trim()

        console.log(nameWithoutExtraSpaces)

        for (let i = 0; i < nameWithoutExtraSpaces.length - 1; i++) {
            if (nameWithoutExtraSpaces[i] === " ") {
                blankSpaceCount=1
                nextChar=nameWithoutExtraSpaces[i + 1].toUpperCase()
                break
            }
        }
        if(blankSpaceCount===0 && nextChar===""){
            nextChar=nameWithoutExtraSpaces[1].toUpperCase()
        }
        firstChar = nameWithoutExtraSpaces[0].toUpperCase()

        return (
            <span style={{ backgroundColor: color }} className="initials">
                {`${firstChar}${nextChar}`}
            </span>
        )
    }

    useEffect(() => {
        console.log("useEffect", isModalOpen)
        if (isModalOpen) {
            document.addEventListener('click', closeModel)

        }
        else {
            document.removeEventListener('click', closeModel)
        }

        return () => {
            document.removeEventListener('click', closeModel)
        }

    }, [isModalOpen])


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('groupsData'))
        if (data) {
            setAllGroupName(data)
        }
        else {
            setAllGroupName([])
        }
    }, [])

    return (
        <div className={homePage ? `${styles['left-container']}` : `${styles['left-container']} ${styles['left-container-deactive']}`}>
            <p className={styles.heading}>Pocket Notes</p>


            <div className={styles['group-name']}>

                {allGroupName.map((data) => {
                    return (
                        <div key={data.name} onClick={() => handleSelectedGroup(data)} className={styles[data.name === selectedGroup?.name ? 'active-group' : ""]}>
                            <div><CalculateInitialsName data={data} /> {data.name}</div>
                        </div>
                    )

                })}

            </div>


            {isModalOpen && (
                <Modal
                    setIsModalOpen={setIsModalOpen}
                    allGroupName={allGroupName}
                    setAllGroupName={setAllGroupName}
                />
            )}

            <button onClick={handleClick} className={styles['add-button']}><img src={addGroupIcon} /></button>
        </div>
    )
}

export default LeftSection