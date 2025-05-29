let lastReply = '';
let lastReplyTime = 0;

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { reply } = req.body;
    lastReply = reply;
    lastReplyTime = Date.now();
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ reply: lastReply });
  }
}

export { lastReply, lastReplyTime };
