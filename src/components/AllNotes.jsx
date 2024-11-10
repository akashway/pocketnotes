import { useEffect } from "react"
import styles from './rightSection.module.css'


const AllNotes = ({ notes }) => {

    const TimestampToDate=({id})=>{
        const timestamp=id
        const dateObject= new Date(id)

        // const year=dateObject.getFullYear()
        // const month=dateObject.toLocaleString('default', { month: 'short' });
        // const date=dateObject.getDate()
        // const hours=dateObject.getHours()
        // const minutes=dateObject.getMinutes()
        // const seconds=dateObject.getSeconds()


        const date=dateObject.toLocaleString('en-US',{
            day:"2-digit",
            month:"short",
            year:"numeric",
            hour:"numeric",
            minute:"numeric",
            hour12: true
        })

        const [month, day, year] = date.split(',');


        return(
            <div>
               { `${month} ${day}`}<span></span>{`${year}`}
            </div>
        )
    }
    return (
        <div>
            {notes.map(
                (note) => (
                    <div className={styles.note} key={note.id}>
                        <div>{note.note}</div>
                        <TimestampToDate id={note.id}/>
                    </div>
                )
            )}
        </div>
    )
}
export default AllNotes