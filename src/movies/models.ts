import { Document, Schema, model } from "mongoose";

interface IRating {
  rating: number;
  numReviews: number;
  meter: number;
}

interface ITomatoes extends Document {
  viewer: IRating;
  fresh?: number;
  critic?: IRating;
  rotten?: number;
  lastUpdated?: Date;
}

export interface IMoviesDocument {
  title: string;
  poster: string;
  plot: string;
  year: string;
  _id: string;
  imdb: {
    rating: string;
    votes: string;
  };
  votes: string;
  genres: [string];
  directors: [string];
}

const TomatoesSchema: Schema<ITomatoes> = new Schema(
  {
    viewer: {
      rating: { type: Number },
      numReviews: { type: Number },
      meter: { type: Number },
    },
    critic: {
      rating: { type: Number },
      numReviews: { type: Number },
      meter: { type: Number },
    },
    rotten: Number,
    lastUpdated: Date,
  },
  { _id: false },
);

const MovieSchema: Schema<IMoviesDocument> = new Schema({
  title: { type: String },
  poster: { type: String },
  plot: { type: String },
  year: { type: String },
  _id: { type: String },
  imdb: { rating: { type: String }, votes: { type: String } },
  votes: { type: String },
  genres: { type: [String] },
  directors: { type: [String] },
});

export const Movies = model<IMoviesDocument>("movies", MovieSchema);
