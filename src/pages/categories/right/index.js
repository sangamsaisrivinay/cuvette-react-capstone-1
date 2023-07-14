import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import data from './data'
import Card from './Card'
import Chips from '../left/Chips'
// import ChipsData from '../left/ChipsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation, faTimes } from '@fortawesome/free-solid-svg-icons'

const Index = () => {

  const [selectedCatgories, setSelectedCategories]= useState([])
  const [selectedCategoryCount, setSelectedCategoryCount]= useState(0)

  const handleCategoryClick=(category)=>{
    if(selectedCatgories.includes(category)){
      setSelectedCategories(selectedCatgories.filter((c)=>c!==category))
      setSelectedCategoryCount(selectedCategoryCount=>selectedCategoryCount-1)
    }
    else{
      setSelectedCategories([...selectedCatgories,category])
      setSelectedCategoryCount(selectedCategoryCount=>selectedCategoryCount+1)
    }
  }

  const handleSubmit=(e)=>{
    // console.log('clicked')
    e.preventDefault()
    const dataToAdd={
      "count": selectedCategoryCount,
      "categories":selectedCatgories
    }
    const newData=JSON.stringify(dataToAdd)
    localStorage.setItem("category-data",newData)
  }

  return (
    <div className="categories-right-container" >
      {data.map((item, index) => (
        <Card
        key={index}
          color={item.color}
          category={item.name}
          imageUrl={item.image}
          selected={selectedCatgories.includes(item.name)}
          onClick={handleCategoryClick}
        />
      ))}
      
      {/* <Chips count={selectedCategoryCount}/> */}
      {/* <ChipsData categories={selectedCatgories} count={selectedCategoryCount}/> */}

      <div id="alert" style={selectedCategoryCount >= 3
            ? { visibility: "hidden" }
            : { visibility: "visible" }}>
        <FontAwesomeIcon icon={faTriangleExclamation} />{" "}
        <label>Minimum 3 categories required</label>
      </div>

      <button
        onClick={handleSubmit}
        style={
          selectedCategoryCount >= 3
            ? { visibility: "visible" }
            : { visibility: "hidden" }
        }
        id='submit-categories'
      >
        <Link to='/home'>
        Next {">"}
        </Link>
      </button>



    </div>
  );
}

export default Index