import axios from 'axios';

const url = 'http://localhost:3000/drawings';

export const fetchDrawings = () => axios.get(url);
export const postDrawing = (newDrawing) => axios.post(url, newDrawing);
