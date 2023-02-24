import React, { useState, useEffect } from 'react'
import Card from './Card'

const Blog = () => {
  const [blog, setBlog] = useState([])
  const getblogs = async () => {
    const response = await fetch("http://localhost:5000/api/blogs/getallblogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setBlog(json);
  };


  useEffect(() => {
    getblogs();
    // eslint-disablenext-line
  }, []);




  return (
    <div className='grid md:grid-cols-3 bg-gradient-to-b from-violet-500 via-violet-400 to-violet-500' >
      {blog.map((element) => {
        // console.log(element._id)
        return (
          <div className=' mx-auto mt-20' key={element.ImageUrl} >
            <Card title={element.title} getblogs={getblogs} description={element.description} author={element.author} content={element.content ? element.content.slice(0, 60) : ""} ImageUrl={element.ImageUrl} date={element.Date} />
          </div>
        )
      })}
    </div>
  )
}


export default Blog
