import axios from "axios";

import React, { useEffect } from 'react'

const Test = () => {
    useEffect(()=>{
        const url='https://reqres.in/api/users/2'
        axios.get(url).then((response)=>{
            const data= response.data;
            console.log(data)
        })
    },[])
  return (
    <div>test</div>
  )
}

export default Test