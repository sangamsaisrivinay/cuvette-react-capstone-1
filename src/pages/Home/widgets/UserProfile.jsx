import React from 'react'
import './style.css'
import { useEffect } from 'react'
import {Avatar} from './images'

const UserProfile = () => {
  const userData=JSON.parse(localStorage.getItem('user-data'))
  const categoryData=JSON.parse(localStorage.getItem('category-data'))
  return (
    <div className='card user-profile-card'>
      <img src='https://stickerly.pstatic.net/sticker_pack/5ZvXoQflxj8USNp5GQwxXA/6PZIYH/2/04ee48ce-275c-4394-8ac2-986c0fb2ece5.png' alt="loading avatar" />
      <div id='user-details'>
      <h3>{userData.name}</h3>
      <p>{userData.email}</p>
      <h2>{userData.userName}</h2>
      <div className='selected-categories'>
        {
          categoryData.categories.map((category, index) => (
            <div key={index} className='category-chips'>
              {category}
            </div>
          ))
        }
      </div>
      </div>

    </div>
  )
}

export default UserProfile