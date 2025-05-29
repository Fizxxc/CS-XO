import { messageTime } from './inbox.js';
import { lastReply } from './reply.js';

export default function handler(req, res) {
  if (Date.now() - messageTime > 60000 && lastReply === '') {
    lastReply = 'Terima kasih telah menghubungi, Admin sedang offline, Tapi Kami akan segera menghubungi Anda.';
  }
  res.status(200).end();
}
