import styles from './leftSection.module.css'
import { useState } from 'react'



const Modal = ({setIsModalOpen,allGroupName,setAllGroupName}) => {

    const [groupName, setGroupName] = useState("")
    const [selectedColor, setSelectedColor] = useState(null)
    const colorOption = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF']

    const handleColorClick = (color) => {
        setSelectedColor(color)
    }

    const handleChange = (e) => {
        setGroupName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(groupName.length>=3){
            const allGroupsData=[...allGroupName,{id:groupName,name:groupName,color:selectedColor}]
            setAllGroupName(allGroupsData)
            localStorage.setItem('groupsData',JSON.stringify(allGroupsData))
            setIsModalOpen(false)
        }
        else{
            alert("Group name should be greater than three")
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.modal}>
            <p>Create New group</p>
            <label>Group Name
            <input type="text" id="name" name="name" placeholder='Enter group name' value={groupName} onChange={handleChange} />
            </label>
            <div>
                <label>
                    Choose colour
                    {colorOption.map(color => <button type="button" onClick={() => handleColorClick(color)} key={color} style={{ backgroundColor: color, width: "50px", height: "50px", margin: "0px 10px", borderRadius: "50%" }}></button>)}
                </label>
            </div>
            <button type='submit'>create</button>
        </form>
    )
}

export default Modal