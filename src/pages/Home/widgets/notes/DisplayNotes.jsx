import React, { useState, useEffect } from 'react';

const DisplayNotes = () => {
//   console.log(localStorage.getItem('notes'))
let notes = JSON.parse(localStorage.getItem('notes'));
// console.log(notes)
  return (
    <div style={{  textAlign:'justify', padding:'5px' }}>
        <h1 style={{ textAlign:'center', marginBottom:'5px'}}>your notes</h1>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', width:'100%',  flexWrap:'wrap', justifyContent:'space-evenly' }}>
        {notes.map((note, index) => {
            return (
                <div key={index} className='card' style={{ width:'100%', margin:'5px', padding:'5px', background:'rgba(0,0,0,0.5)', color:'white' }}>
                    <p>{note}</p>
                    
</div>
            )
        })}
        </div>
    </div>  
  );
};

export default DisplayNotes;
