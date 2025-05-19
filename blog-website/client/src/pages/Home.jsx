import React, { useState } from 'react';
import BlogList from '../components/BlogList';
import BlogEditor from '../components/BlogEditor';

const Home = () => {
    const [editingBlog, setEditingBlog] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [openBlogEditor, setOpenBlogEditor] = useState(false);

    const handleEdit = (blog) => setEditingBlog(blog);
    const refreshList = () => {
        setEditingBlog(null);
        setRefresh(!refresh);
    };
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">Blog Editor</h1>
                <button className='border border-green-400 px-4 py-1 rounded bg-green-200 text-green-800' onClick={()=>setOpenBlogEditor(true)}>Create Blog</button>
                {
                    openBlogEditor && (
                        <BlogEditor editingBlog={editingBlog} close={()=>setOpenBlogEditor(false)} onSave={refreshList} />
                    )
                }
                <hr className="my-6" />
                <BlogList key={refresh} onEdit={handleEdit} />
            </div>
        </div>
    )
}

export default Home