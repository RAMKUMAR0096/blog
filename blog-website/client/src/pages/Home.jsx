import React, { useEffect, useState } from 'react';
import BlogList from '../components/BlogList';
import BlogEditor from '../components/BlogEditor';
import SummaryApi from '../common/SummaryApi';
import Axios from '../utils/Axios';

const Home = () => {
    const [openBlogEditor, setOpenBlogEditor] = useState(false);
   
      const fetchBlogs = async () => {
        const res = await Axios({
          ...SummaryApi.get_blog,
        })
      };
      useEffect(() => {
        fetchBlogs();
      }, []);
    
    
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-5xl mx-auto">
                <button className='border border-green-400 px-4 py-1 rounded  bg-green-200 text-green-800' onClick={()=>setOpenBlogEditor(true)}>Create Blog</button>
                {
                    openBlogEditor && (
                        <BlogEditor  close={()=>setOpenBlogEditor(false)} />
                    )
                }
                <hr className="my-6" />
                <BlogList  />
            </div>
        </div>
    )
}

export default Home