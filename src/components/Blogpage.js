import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
// import { useParams } from 'react-router-dom';

const Blogpage = () => {
    const { postId } = useParams();
    console.log(postId)
    const [data, setData] = useState([]);


    const Getoneblog = async () => {
        const response = await fetch("http://localhost:5000/api/blogs/myblog/63d50333888f1c6045c4aeae", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        setData(json);
    };


    useEffect(() => {
        Getoneblog();
        // eslint-disablenext-line
    }, []);



    let { title, description, content, author, Date } = data;
    return (

        <div className='  h-full    bg-gradient-to-b from-violet-500 via-violet-400 to-violet-700 '>
            <div className=' mx-24 '>
                <div className='pt-7'>
                    <h1 className=' text-3xl font-bold text-gray-200'>
                        {title}
                    </h1>
                </div>
                <div className=' text-xl my-3 text-gray-200'>
                    {description}
                </div>
                <div>
                    <img src="https://ucarecdn.com/c3d6a9c2-8a56-4fcb-ac86-73ec6a96bf40/-/resize/1430x//-/format/auto/-/quality/lighter/-/resize/840x/" alt="blogphoto" />
                </div>
                <div className=' mt-3 pb-1'>
                    <p className='text-xl text-gray-200'>
                        {content}
                    </p>
                </div>
                <div className='flex pb-3 justify-between'>
                    <p className='text-xl pt-4 text-gray-200 '>{author}</p>
                    <p className='text-xl pt-4 text-gray-200'>{Date}</p>
                </div>
                <div className=' pb-3 pt-1'>
                    <Link className="py-2  mx-auto lg:mx-0 hover:underline bg-gradient-to-l from-violet-400 to-violet-500 text-gray-300 text-xl font-bold rounded-full my-4 px-8 shadow-lg" to="/blog">Go back</Link>

                </div>
            </div>
        </div>

    )
}


export default Blogpage
