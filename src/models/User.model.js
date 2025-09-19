import { model, Types, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      minlenght: 3,
      maxlenght: 20,
      require: true,
    },
    gmail: { type: String, unique: true, require: true, match: /.+\@.+\..+/ },
    password: { type: String, require: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    profiler: {
      firstName: { type: String, minlenght: 2, maxlenght: 50, require: true },
      lastname: { type: String, minlenght: 2, maxlenght: 50, require: true },
      biography: { type: String, maxlenght: 500, require: true },
      avatarUrl: { type: String },
    },
  },
  { timestamps: true, versionKey: false }
);

export const UserModel = model("User", UserSchema);
