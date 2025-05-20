import BlogModel from "../models/blog.model.js";

export async function getBlog(req, res){
    const drafts = await BlogModel.find({ status: 'draft' }).sort({ updated_at: -1 });

    const published = await BlogModel.find({ status: 'published' }).sort({ updated_at: -1 });

    res.json({ drafts, published });
}


export async function saveinPublish (req, res){
  console.log("req body:",req.body)
    try {
      const {  id ,title, content, tags } = req.body;
      
  
      let blog; 
      if (id) {
        blog = await BlogModel.findByIdAndUpdate(
          {_id:id},
          { title, content, tags, status: 'published' },
        );
      } else {
        blog = new BlogModel({ title, content, tags, status: 'published' });

        await blog.save();
      }
  
      res.status(200).json(blog);
    } catch (err) {
      res.status(500).json({ error: err.message || error });
    }
}

export async function saveinDraftandUpdate (req, res){
    try {
      const { id, title, content, tags } = req.body;
  
      let blog;
      if (id) {
        blog = await BlogModel.findByIdAndUpdate(
          {_id:id},
          { title, content, tags, status: 'draft' },
        );
      } else {
        blog = new BlogModel({ title, content, tags, status: 'draft' });

        await blog.save();
      }
  
      res.status(200).json(blog);
    } catch (err) {
      res.status(500).json({ error: err.message || error  });
    }
}