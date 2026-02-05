import { Router, Request, Response } from "express";
import { Movies } from "./models.ts";
import { addMovie } from "./controller.ts";
export const movieRouter = Router();

movieRouter.get("/movies", async (req: Request, res: Response) => {
  const { genre } = req.query;

  const query = {} as any;

  if (genre) {
    query.genres = genre;
  }

  const movies = await Movies.find(query).limit(100);

  res.json(movies);
});
movieRouter.post("/addMovie", async (req: Request, res: Response) => {
  const { title } = req.body;
  const response = await addMovie(title);
  console.log(response);
});
