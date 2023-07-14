import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
const News = () => {

const news= useRef({})
const [articleNumber, setArticleNumber] = useState(0)

useEffect(()=>{
  
  axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=76f51644582d45049984fc232940ecb2')
  .then(res=>{
    console.log('fetched news')
    news.current=res.data.articles
    console.log(news.current[0])
    console.log(typeof news.current[0].publishedAt)
  }
  )
  .catch(err=>console.log(err.message))
},[])

const nextArticle = () => {
  setArticleNumber((articleNumber)=>articleNumber+1)
}

const prevArticle = () => {
  if (articleNumber>0)
  setArticleNumber((articleNumber)=>articleNumber-1)
}

  return (
    <div className="card news-card" style={{ position: "relative" }}>
      <div style={{}}>
        {news.current[articleNumber].urlToImage ? (
          <img
            src={news.current[articleNumber].urlToImage}
            alt="loading"
            style={{
              width: "100%",
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />
        ) : (
          <img
            src="https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"
            alt="buffer"
            style={{
              width: "100%",
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />
        )}

        <div
          style={{
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2em",
              fontWeight: "bold",
            }}
          >
            {news.current[articleNumber].title}
          </p>
          <br />
          <p style={{ fontSize: "0.8rem", textAlign: "center" }}>
            published on: {news.current[articleNumber].publishedAt.slice(0, 10)}
          </p>
        </div>
        <p style={{textAlign:'justify'}}>
          {news.current[articleNumber].content}{" "}
          <a href={news.current[articleNumber].url} style={{textDecoration:'none'}}>read full article</a>
        </p>
        <br />
        <br />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          padding: "0 10px",
          // marginTop: "100px",
          position: "absolute",
          bottom: "0",
          right: "0",
          backgroundColor: "rgba(0,0,0,0.1)",
        }}
      >
        <button
          onClick={prevArticle}
          style={{
            padding: "10px",
            border: "none",
            outline: "none",
            backgroundColor: "rgba(0,0,0,0)",
            cursor: "pointer",
          }}
        >
          prev
        </button>
        <button
          onClick={nextArticle}
          style={{
            padding: "10px",
            border: "none",
            outline: "none",
            backgroundColor: "rgba(0,0,0,0)",
            cursor: "pointer",
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default News