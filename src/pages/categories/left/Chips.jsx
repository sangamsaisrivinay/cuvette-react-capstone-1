import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation, faTimes } from '@fortawesome/free-solid-svg-icons'
const Chips = ({categories, count}) => {
  // console.log("categories",categories, "count", count)
  // console.log(typeof categories)
    const items=['romance','fiction','action','romance','fiction','action','romance','fiction','action']
  return (
    <div className="chips-container">
      <div className="chips">
      {items.map((item, index) => (
          <div key={index} className='chip'>
            {item}
            <FontAwesomeIcon icon={faTimes} style={{padding:'0 0 0 5px', cursor:'pointer'}}/>
            </div>
        ))}
      </div>
      {/* <div id="alert">
        <FontAwesomeIcon icon={faTriangleExclamation} />{" "}
        <label>Minimum 3 categories required</label>
      </div> */}
    </div>
  );
}

export default Chips