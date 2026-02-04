import { Movies } from "./models";
export const addMovie = (title: string) => {
  const addedMovie = Movies.create({ title });
  return addedMovie;
};
