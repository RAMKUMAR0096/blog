import React, { useEffect, useState } from 'react';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
import EditBlog from './EditBlog';
import moment from 'moment';
import AxiosToastError from '../utils/AxiosToastError';

const BlogList = () => {
  const [drafts, setDrafts] = useState([]);
  const [published, setPublished] = useState([]);
  const [openEditBlogList, setOpenEditBlogList] = useState(false);
  const [editData, setEditData] = useState({
    title: "",
    content: "",
    tags: ""
  })



  const fetchBlogs = async () => {
    try {
      const res = await Axios({
        ...SummaryApi.get_blog,
      })

      setDrafts(res.data.drafts);
      setPublished(res.data.published);
    } catch (error) {
      AxiosToastError(error)
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);


  return (
    <section>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Published</h2>


      {
        published.map(blog => (
          <div key={blog._id + "blogs"} className="border rounded p-4 bg-white mb-3">
            <h4 className="text-lg font-bold">{blog.title}</h4>
            <p className='text-ellipsis line-clamp-3'>{blog.content}</p>
            <p className="text-gray-500 text-sm">
              {moment(blog.updated_at).format('LLLL')}
            </p>

          </div>
        ))
      }


      <h2 className="text-2xl font-semibold mb-3">Drafts</h2>
      {
        drafts.map(blog => (
          <div key={blog._id + "blogs"} className="border rounded p-4 bg-white mb-3">
            <h4 className="text-lg font-bold">{blog.title}</h4>
            <p className='text-ellipsis line-clamp-3'>{blog.content}</p>
            <p className="text-gray-500 text-sm">
              {moment(blog.updated_at).format('LLLL')}
            </p>

            <button
              onClick={() => setOpenEditBlogList(true)}
              className="text-blue-600 mt-2 hover:underline"
            >
              Edit
            </button>
            {
              openEditBlogList && (
                <EditBlog data={blog} close={() => setOpenEditBlogList(false)} fetchBlogs={fetchBlogs} />
              )
            }

          </div>
        ))
      }



    </section>
  );
};

export default BlogList;