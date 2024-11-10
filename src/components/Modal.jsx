import styles from './leftSection.module.css'
import { useState,useEffect } from 'react'



const Modal = ({ setIsModalOpen, allGroupName, setAllGroupName }) => {

    const [groupName, setGroupName] = useState("")
    const [selectedColor, setSelectedColor] = useState(null)
    const colorOption = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF']
    const [isValidForm,setIsValidForm]= useState(false)


    const handleColorClick = (color) => {
        setSelectedColor(color)
    }

    const handleChange = (e) => {
        setGroupName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data=JSON.parse(localStorage.getItem('groupsData'))
        let allGroupsData 
        let flag=false

        if (data){
            data.map((item)=>{
                if(item.name===groupName){
                    alert("name already avaialble")
                    flag=true
                }
            })
        }

        if (groupName.length >= 2 && !flag ) {
            if(data){
                allGroupsData = [...data, { id: groupName, name: groupName, color: selectedColor }]
            }
            else{
                allGroupsData = [...allGroupName, { id: groupName, name: groupName, color: selectedColor }]
            }
            setAllGroupName(allGroupsData)
            localStorage.setItem('groupsData', JSON.stringify(allGroupsData))
            setIsModalOpen(false)
        }
        if(groupName.length <2) {
            alert("Group name should be greater than two charchater")
        }
    }

    useEffect(()=>{
        if(groupName && selectedColor){
            setIsValidForm(true)
        }
        else{
            setIsValidForm(false)
        }
    })


    return (
        <div className={styles.modal}>
            <form onSubmit={handleSubmit}>
                <p>Create New group</p>

                <div>
                    Group Name
                    <input type="text" id="name" name="name" placeholder='Enter group name' value={groupName} onChange={handleChange} />
                </div>

                <div>
                    Choose colour
                    {colorOption.map(color => {
                        return(
                            <div key={color}>
                            <button className={styles['color-option']} type="button" onClick={() => handleColorClick(color)} style={{ backgroundColor: color, border: `1px solid ${color}` }}></button>
                            </div>
                        )
                    })}
                </div>

                <button type='submit' className={styles['create-button']} disabled={!isValidForm}>create</button>
            </form>
        </div>
    )
}

export default Modal