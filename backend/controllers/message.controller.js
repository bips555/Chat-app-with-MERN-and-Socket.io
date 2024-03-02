import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
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

const newMessage = new Message({
    senderId:senderId,
    receiverId:receiverId,
    message:message
})

if(newMessage)
{
conversation.messages.push(newMessage._id)
}
// socket io functionality left

// await conversation.save()
// await newMessage.save()

await Promise.all([conversation.save(),newMessage.save()])
 
res.status(201).json({newMessage});

  } catch (error) {
    console.log("Error in sendMessageControllerAPi", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
};
export const getMessageContoller = async (req, res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id
        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]}
        }).populate("messages")

if(!conversation) return res.status(200).json([])

const messages = conversation.messages;

res.status(200).json(messages);

        res.status(200).json(conversation.messages);
     
 
    } catch (error) {
      console.log("Error in getMessageControllerAPi", error.message);
      res.status(500).json({ error: "Internal Server error" });
    }
  };
  