import express from 'express';
import cors from 'cors'; 
import { getUsers, addUser } from '../controllers/userController.js';

const router = express.Router();

const corsOptions = {
  origin: 'http://localhost:3000', 
};

router.get('/users', cors(corsOptions), getUsers); // Apply CORS to this route only
router.post('/users', cors(corsOptions), addUser); // Apply CORS to this route only

export default router;
