import React, { useEffect, useState } from 'react';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';

const BlogList = ({ onEdit }) => {
  const [drafts, setDrafts] = useState([]);
  const [published, setPublished] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await Axios({
      ...SummaryApi.get_blog,
    })
    setDrafts(res.data.drafts);
    setPublished(res.data.published);
  };

  const renderBlogs = (blogs, editable = false) => blogs.map(blog => (
    <div key={blog._id} className="border rounded p-4 bg-white mb-3">
      <h4 className="text-lg font-bold">{blog.title}</h4>
      <p className="text-gray-500 text-sm">{new Date(blog.updated_at).toLocaleString()}</p>
      {editable && (
        <button
          onClick={() => onEdit(blog)}
          className="text-blue-600 mt-2 hover:underline"
        >
          Edit
        </button>
      )}
    </div>
  ));

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">Drafts</h2>
      {renderBlogs(drafts, true)}

      <h2 className="text-2xl font-semibold mt-6 mb-3">Published</h2>
      {renderBlogs(published)}
    </div>
  );
};

export default BlogList;