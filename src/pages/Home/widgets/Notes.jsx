import React from 'react'
import AddNote from './notes/AddNote'
import DisplayNotes from './notes/DisplayNotes'
const Notes = () => {



  return (
    <div className='card notes-card' 
    style={{position:'relative'}}
    >
      
      <div style={{maxHeight:'90%', width:'100%'}}>
        <DisplayNotes />
      </div>
      
      <div className='card-footer' style={{position:'sticky',top:'95%',left:'95%'}}>
        <AddNote/>
        </div>
      </div>
  )
}

export default Notes