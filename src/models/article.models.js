import { Result } from "express-validator";
import { model, Schema } from "mongoose";

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
    author: { type: Schema.Types.ObjectId, ref: "User", require: true },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tags" }],
  },
  { timestamps: true, versionKey: false }
);

ArticleSchema.virtual("Comment", {
  ref: "Comment",
  localField: "_id",
  foreignField: "article",
});

ArticleSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, result) => {
    delete result.id;
  },
});

export const ArticleModels = model("Article", ArticleSchema);
