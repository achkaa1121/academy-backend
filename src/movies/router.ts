import { Router, Request, Response } from "express";
import { Movies } from "./models.ts";
export const movieRouter = Router();

movieRouter.get("/movies", async (req: Request, res: Response) => {
  const pageNumber = Number(req.query.page) || 1;
  const skip = (pageNumber - 1) * 20;
  const movies = await Movies.find().skip(skip).limit(20);
  const totalMovies = await Movies.countDocuments();
  const totalPages = Math.ceil(totalMovies / 20);
  res.json({ movies, totalPages });
});
movieRouter.get("/topMovies", async (req, res) => {
  const topMovies = await Movies.find().sort({ "imdb.rating": -1 }).limit(100);
  res.json(topMovies);
});
movieRouter.get("/popularMovies", async (req, res) => {
  const popularMovies = await Movies.find()
    .sort({ "imdb.votes": -1 })
    .limit(100);
  res.json(popularMovies);
});
