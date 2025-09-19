import { model, Types, Schema } from "mongoose";

const TagSchema = new Schema({
  name: { type: String, unique: true, trim: true, require: true },
  description: { type: String, maxlengh: 200 },
  createdAt: { type: Date },
  updatedAT: { type: Date },
});

export const TagsModels = model("Tags", TagSchema);
