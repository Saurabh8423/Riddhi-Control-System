import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    message: String,
    sender: String,
  },
  { timestamps: true }
);

export default mongoose.model("ChatMessage", chatSchema);
