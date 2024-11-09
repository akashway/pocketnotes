import { useEffect } from "react"

const AllNotes = ({ notes }) => {

    const TimestampToDate=({id})=>{
        const timestamp=id
        const dateObject= new Date(id)

        const year=dateObject.getFullYear()
        const month=dateObject.getMonth()+1
        const date=dateObject.getDate()
        const hours=dateObject.getHours()
        const minutes=dateObject.getMinutes()
        const seconds=dateObject.getSeconds()

        return(
            <div>
               { `${date}/${month}/${year}--${hours}:${minutes}:${seconds}`}
            </div>
        )
    }
    return (
        <div>
            {notes.map(
                (note) => (
                    <div key={note.id}>
                        {note.note+"   "}
                        <TimestampToDate id={note.id}/>
                    </div>
                )
            )}
        </div>
    )
}
export default AllNotes