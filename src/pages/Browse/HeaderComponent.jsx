import React from 'react'
import './Style.css'
import {Avatar} from '../Home/widgets/images/'
const HeaderComponent = () => {
  return (
    <div 
    style={{minHeight:'10vh',marginBottom:'5px',display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',padding:'1vw 3vw'}}
    >
        <h1 className='browse-heading'
        style={{fontSize:'2.5em', color: '#72DB73'}}
        >super app</h1>
        <div style={{width:'10vw',height:'10vw',backgroundColor:'blue',borderRadius:'50%',overflow:'hidden'}}>
            <img src='https://stickerly.pstatic.net/sticker_pack/5ZvXoQflxj8USNp5GQwxXA/6PZIYH/2/04ee48ce-275c-4394-8ac2-986c0fb2ece5.png' alt="loading avatar"
            style={{width:'100%',height:'100%',objectFit:'cover'}}
            />
            </div>
    </div>
  )
}

export default HeaderComponent