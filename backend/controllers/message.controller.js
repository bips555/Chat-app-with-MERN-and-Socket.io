import Conversation from "../models/conversation.model.js";

export const sendMessageController = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

     let conversation = await Conversation.findOne(
    {
        participants:{$all:[senderId,receiverId]},
    }
)
if(!conversation)
{
    conversation = await Conversation.create({
        participants:[senderId,receiverId]
    })
}

const newMessage = new message({
    senderId:senderId,
    receiverId:receiverId,
    message
})

if(newMessage)
{
conversation.mesages.push(newMessage._id)
}

res.status(201).json({newMessage});

  } catch (error) {
    console.log("Error in sendMessageControllerAPi", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
};
