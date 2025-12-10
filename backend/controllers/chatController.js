import ChatMessage from "../models/ChatMessage.js";

export const saveMessage = async (req, res) => {
  try {
    const { message, sender } = req.body;

    const msg = await ChatMessage.create({
      message,
      sender,
    });

    res.json(msg);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const msgs = await ChatMessage.find().sort({ createdAt: 1 });
    res.json(msgs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
