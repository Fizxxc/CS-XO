let lastMessage = '';
let messageTime = 0;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    lastMessage = message;
    messageTime = Date.now();
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ message: lastMessage });
  }
}
