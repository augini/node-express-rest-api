import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { getImage, postImage } from '../controllers/files.js';

const router = express.Router();

router.get('/', getImage);
router.post('/', postImage);

export default router;
