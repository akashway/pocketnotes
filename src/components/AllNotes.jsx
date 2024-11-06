const AllNotes=({allNotes,setAllNotes})=>{
    return(
        <div>
       { allNotes.map(note =>{
            return(
                <div key={note}>
                    {note}
                </div>
            )
        })}
        </div>
    )
}
export default AllNotes