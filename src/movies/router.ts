import { Router, Request, Response } from "express";
import { Movies } from "./models.ts";
export const movieRouter = Router();

movieRouter.get("/movies", async (req: Request, res: Response) => {
  const movies = await Movies.find().limit(100);
  res.json(movies);
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
