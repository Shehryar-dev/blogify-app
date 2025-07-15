import { Schema, model } from "mongoose";

const CommentSchema = Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    blog: {  
      type: Schema.Types.ObjectId,
      ref: "blog",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const CommentModel = model('comments', CommentSchema);