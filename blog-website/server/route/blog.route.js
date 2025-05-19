import { Router } from 'express'
import { getBlog, saveinDraftandUpdate, saveinPublish } from '../controllers/blog.controller.js';

const blogRouter = Router();

// Save or update a draft
blogRouter.post('/blogs/save-draft',saveinDraftandUpdate);

// Save and publish an article
blogRouter.post('/blogs/publish', saveinPublish);



export default blogRouter;

blogRouter.get('/blogs',getBlog);


// GET /api/blogs
