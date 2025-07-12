import { Schema, model } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: false,
  },
  coverImage: {
    type: String,
    required: false,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {timestamps: true});

export const Blog = model("blog", blogSchema);