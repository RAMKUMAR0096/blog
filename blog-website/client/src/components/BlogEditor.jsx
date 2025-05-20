import React, { useState, useEffect } from 'react';
import Axios from '../utils/Axios';
import { IoClose } from "react-icons/io5";
import SummaryApi from '../common/SummaryApi';
import AxiosToastError from '../utils/AxiosToastError';

const BlogEditor = ({ close }) => {

  const [data, setData] = useState({
    title: "",
    content: "",
    tags: ""
  })


  const saveDraft = async () => {
    const payload = { title: data?.title, content: data?.content, tags: data?.tags };
    const res = await Axios({
      ...SummaryApi.save_draft,
      data: payload
    })
    
    setData(() => ({
      title: "",
      content: "",
      tags: ""
    }));
    if(close){
      close();
    }
  };

  const publishBlog = async () => {
    const payload = { title: data?.title, content: data?.content, tags: data?.tags };

    try {
      await Axios({
        ...SummaryApi.publish_blog,
        data: payload

      })
      setData(() => ({
        title: "",
        content: "",
        tags: ""
      }));
      if(close){
        close();
      }
    } catch (error) {
    AxiosToastError(error)
  }
};



const handleonChange = (e) => {
  const { name, value } = e.target

  setData((prev) => {
    return {
      ...prev,
      [name]: value
    }
  })



}


return (
  <section className='fixed top-0 bottom-0 right-0 left-0 bg-black p-8 bg-opacity-75'>
    <div className="bg-white p-6 rounded-xl shadow">
      <div className='flex items-center justify-between my-2'>
        <h2 className="text-xl font-semibold mb-4">{'New Blog'}</h2>
        <IoClose className='cursor-pointer' onClick={close} size={30} />
      </div>
      <input
        type="text"
        value={data.title}
        name='title'
        onChange={handleonChange}
        placeholder="Blog Title"
        className="w-full border rounded p-2 mb-3"
      />
      <textarea
        rows={10}
        value={data.content}
        name="content"
        onChange={handleonChange}
        placeholder="Content..."
        className="w-full border rounded p-2 mb-3"
      />
      <input
        type="text"
        value={data.tags}
        name="tags"
        onChange={handleonChange}
        placeholder="Tags (comma-separated)"
        className="w-full border rounded p-2 mb-4"
      />
      <div className="flex gap-4">
        <button
          onClick={saveDraft}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Save as Draft
        </button>
        <button
          onClick={publishBlog}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Publish
        </button>
      </div>
    </div>
  </section>

);
};

export default BlogEditor;