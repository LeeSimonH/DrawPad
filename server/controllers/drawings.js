import express from 'express';
import mongoose from 'mongoose';

import Drawing from '../models/drawingsModel.js';
const router = express.Router();

export const getDrawings = async (req, res) => {
  try {
    const drawings = await Drawing.find();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createDrawing = async (req, res) => {
  const { drawingId, grid } = req.body;

  const newDrawing = new Drawing({ drawingId, grid });

  try {
    await newDrawing.save();
    res.status(201).json(newDrawing);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default router;
