import express from 'express';

import { getDrawings, createDrawing } from '../controllers/drawings';

const router = express.Router();

router.get('/', getDrawings);
router.post('/', createDrawing);

export default router;
