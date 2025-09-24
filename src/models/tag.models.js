import { model, Schema } from "mongoose";

const TagSchema = new Schema(
  {
    name: { type: String, unique: true, trim: true, require: true },
    description: { type: String, maxlengh: 200 },
  },
  { timestamps: true, versionKey: false }
);

TagSchema.virtual("Articles", {
  ref: "Article",
  localField: "_id",
  foreignField: "tags",
});

TagSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, result) => {
    delete result.id;
  },
});

export const TagsModels = model("Tags", TagSchema);
