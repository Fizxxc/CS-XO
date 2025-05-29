export default function handler(req, res) {
  const adminUser = 'XOFizzx';
  const adminPass = 'XoFizzx132';

  if (req.method === 'POST') {
    const { username, password } = req.body;
    if (username === adminUser && password === adminPass) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  } else {
    res.status(405).end();
  }
}
