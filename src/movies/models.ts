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

export interface IMoviesDocument extends Document {
  title: string;
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
});

export const Movies = model<IMoviesDocument>("movies", MovieSchema);
