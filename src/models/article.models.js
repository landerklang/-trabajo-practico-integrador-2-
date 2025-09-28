import { model, Schema } from "mongoose";
import { CommentModels } from "./comment.models.js";

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

ArticleSchema.pre("findOneAndDelete", async function (next) {
  const comment = await this.model.findOne(this.getFilter());

  if (comment) {
    await CommentModels.deleteMany({ article: comment._id });
  }
  next();
});

export const ArticleModels = model("Article", ArticleSchema);
