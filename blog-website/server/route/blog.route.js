import { Router } from 'express'
import { getBlog, saveinDraftandUpdate, saveinPublish } from '../controllers/blog.controller.js';
import auth from '../middleware/auth.js';

const blogRouter = Router();


blogRouter.post('/blogs/save-draft',saveinDraftandUpdate);


blogRouter.post('/blogs/publish',saveinPublish);



export default blogRouter;

blogRouter.get('/blogs',getBlog);



