import React, { useState, useEffect } from 'react';
import Axios from '../utils/Axios';
import { IoClose } from "react-icons/io5";
import SummaryApi from '../common/SummaryApi';

const BlogEditor = ({ editingBlog, onSave, close }) => {

  const [data,setData]=useState({
    title:"",
    content:"",
    tags:[]
  })
  console.log("data:",data)
  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');
  // const [tags, setTags] = useState('');
  // const [id, setId] = useState(null);
  // const [typingTimeout, setTypingTimeout] = useState(null);

  // useEffect(() => {
  //   if (editingBlog) {
  //     setTitle(editingBlog.title);
  //     setContent(editingBlog.content);
  //     setTags(editingBlog.tags.join(', '));
  //     setId(editingBlog._id);
  //   } else {
  //     setTitle('');
  //     setContent('');
  //     setTags('');
  //     setId(null);
  //   }
  // }, [editingBlog]);

  const saveDraft = async () => {
    const payload = { title, content, tags: tags.split(',').map(tag => tag.trim()) };
    const res = await Axios({
      ...SummaryApi.save_draft,
      data:payload
    })
    setId(res.data._id);
    onSave?.();
  };

  const publishBlog = async () => {
    const payload = { title, content, tags: tags.split(',').map(tag => tag.trim()) };

    await Axios({
      ...SummaryApi.publish_blog,
      data:payload
    })
    onSave?.();
  };

  // const autoSave = () => {
  //   if (typingTimeout) clearTimeout(typingTimeout);
  //   setTypingTimeout(setTimeout(saveDraft, 5000));
  // };

  const handleonChange=(e)=>{
    const { value } =e.target

    setData((prev)=>{
      return{
        ...prev,
      [name] : value
      }
    })



  }
  

  // const [data,setData]=useState({
  //   title:"",
  //   content:"",
  //   tags:[]
  // })
   const handleTagChange = (e) => {
    const { value } = e.target; // e.g., "education,book,note"
    const filterTags = value.split(',').map(tag => tag.trim()); // Trim extra spaces
    setData(prevData => ({
      ...prevData,
      tags: filterTags
    }));
    console.log("tags", filterTags);
  };

  return (
    <section className='fixed top-0 bottom-0 right-0 left-0 bg-black p-8 bg-opacity-75'>
      <div className="bg-white p-6 rounded-xl shadow">
        <div className='flex items-center justify-between my-2'>
          <h2 className="text-xl font-semibold mb-4">{id ? 'Edit Blog' : 'New Blog'}</h2>
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
          onChange={handleTagChange}
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