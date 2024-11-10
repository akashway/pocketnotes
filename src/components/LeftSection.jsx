import styles from './leftSection.module.css'
import addGroupIcon from '../assets/Group 24.png'
import { useState,useEffect, useDebugValue } from 'react'

import Modal from './Modal'

const LeftSection = ({ selectedGroup,setSelectedGroup,homePage,setHomePage }) => {

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

    const CalculateInitialsName = ({data}) => {
        const {name,color}=data
        let flag=0
        let firstChar
        let nextChar
        for (let i = 0; i < name.length-1; i++) {
            if (i === 0) {
                firstChar = name[0].toUpperCase()
            }
            else {
                if (name[i] === " ") {
                    flag=1
                    nextChar = name[i + 1].toUpperCase()
                    break
                }
            }
        }

        if(flag===0){
            nextChar=name[1].toUpperCase()
        }
        return (
            <span style={{ backgroundColor: color}} className="initials">
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
        <div className={homePage?`${styles['left-container']}`:`${styles['left-container']} ${styles['left-container-deactive']}`}>
            <p className={styles.heading}>Pocket Notes</p>


            <div className={styles['group-name']}>

            {allGroupName.map((data) => {
                return (
                    <div key={data.name} onClick={() => handleSelectedGroup(data)} className={styles[data.name===selectedGroup?.name?'active-group':""]}>
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