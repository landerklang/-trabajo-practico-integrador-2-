import { model, Types, Schema } from "mongoose";

const CommentSchema = new Schema(
  {
    content: { type: String, minlengt: 5, maxlengt: 500, require: true },
    author: { type: Types.ObjectId, ref: "User", require: true },
    article: { type: Types.ObjectId, ref: "Article" },
  },
  { timestamps: true, versionKey: false }
);

export const CommentModels = model("Comment", CommentSchema);
