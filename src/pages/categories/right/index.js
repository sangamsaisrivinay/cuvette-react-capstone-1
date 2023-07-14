import React, { useState } from 'react'
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

  const handleSubmit=()=>{
    console.log('clicked')
    const existing= localStorage.getItem("data")
    const dataToAdd={
      "count": selectedCategoryCount,
      "categories":selectedCatgories
    }
    const newData=JSON.stringify({...JSON.parse(existing),dataToAdd})
    localStorage.setItem("data",newData)
  }

  return (
    <div className="categories-right-container" onSubmit={handleSubmit}>
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
        Next {">"}
      </button>



    </div>
  );
}

export default Index