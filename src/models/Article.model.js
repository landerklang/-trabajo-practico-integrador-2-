import { model, Types, Schema } from "mongoose";

const ArticleSchema = new Schema(
  {
    title: { type: String, minlenght: 3, maxlengt: 200, require: true },
    content: { type: String, minlenght: 50, require: true },
    excerpt: { type: String, maxlengt: 500 },
    status: {
      type: String,
      enum: ["published", "archived"],
      default: "published",
      require: true,
    },
    author: { type: Types.ObjectId, ref: "User" },
    tags: [{ type: Types.ObjectId, ref: "Tags" }],
  },
  { timestamps: true, versionKey: false }
);

export const ArticleModels = model("Article", ArticleSchema);
