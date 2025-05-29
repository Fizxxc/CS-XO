let lastMessage = '';
let messageTime = 0;
let lastUser = '';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message, user } = req.body;
    lastMessage = message;
    lastUser = user;
    messageTime = Date.now();
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ message: lastMessage, user: lastUser });
  }
}

export { messageTime, lastUser };
