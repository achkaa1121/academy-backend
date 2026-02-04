import { Router, Request, Response } from "express";
import { Movies } from "./models.ts";
import { addMovie } from "./controller.ts";
export const movieRouter = Router();

movieRouter.get("/movies", async (req: Request, res: Response) => {
  console.log("movies");
  const movies = await Movies.find({}).limit(100);
});
movieRouter.post("/addMovie", async (req: Request, res: Response) => {
  const { title } = req.body;
  const response = await addMovie(title);
  console.log(response);
});
