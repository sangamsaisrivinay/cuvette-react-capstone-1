import React from 'react'
import './style.css'
const index = () => {
  const items=['romance','action','horror','romance','action','horror','romance','action','horror']
  return (
    <div className='categories-right-container'>
      {
        items.map((item,index)=>
           <div key={index} class='card'>
            <p style={{textAlign:'left', width:'100%', padding:'5px 0 5px 10px'}}>{index}:{item}</p>
            <img style={{padding:'5px', borderRadius:'10px'}} src='https://i.stack.imgur.com/lTReY.png' alt='loading p'/>
            </div>
        )
      }
    </div>
  )
}

export default index