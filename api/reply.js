let lastReply = '';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { reply } = req.body;
    lastReply = reply;
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ reply: lastReply });
  }
}
