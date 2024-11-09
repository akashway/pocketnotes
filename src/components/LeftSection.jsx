import styles from './leftSection.module.css'
import addGroupIcon from '../assets/Group 24.png'
import { useState } from 'react'
import { useEffect } from 'react'

import Modal from './Modal'

const LeftSection = ({setSelectedGroup}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [allGroupName,setAllGroupName]=useState([])

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
        else{
            console.log("outside")
        }
    }

    const handleSelectedGroup=(name)=>{
        setSelectedGroup(name)
    }

    const CalculateInitialsName=({name})=>{
        let firstChar
        let nextChar
         for(let i=0;i<name.length;i++){
             if(i===0){
                 firstChar=name[0]
             }
             else{
                 if(name[i]===" "){
                     nextChar=name[i+1]
                     break
                 }
             }
         }
         return `${firstChar}${nextChar}`
    }

    useEffect(() => {
        console.log("useEffect",isModalOpen)
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


    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem('groupsData'))
        if(data){
            setAllGroupName(data)
        }
        else{
            setAllGroupName([])
        }
    },[])

    return (
        <div className={styles['left-container']}>
            <p>Pocket Notes</p>

            {allGroupName.map((data)=>{
                return(
                    <div style={{backgroundColor:data.color}} key={data.name} onClick={()=>handleSelectedGroup(data.name)}>
                       <CalculateInitialsName name={data.name}/> {data.name}
                    </div>
                )

            })}


            {isModalOpen && (
                <Modal 
                setIsModalOpen={setIsModalOpen}
                allGroupName={allGroupName}
                setAllGroupName={setAllGroupName}
                />
            )}

            <button onClick={handleClick}><img src={addGroupIcon} /></button>
        </div>
    )
}

export default LeftSection