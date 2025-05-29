import { messageTime, lastUser } from './inbox.js';
import { lastReply, lastReplyTime } from './reply.js';

export default function handler(req, res) {
  const now = Date.now();
  if (now - messageTime > 60000 && lastReplyTime < messageTime) {
    // Balasan bot jika admin tidak membalas 1 menit setelah pesan terakhir
    global.lastReply = `Halo ${lastUser}, mohon tunggu sebentar. Admin sedang memeriksa pesan Anda.`;
    global.lastReplyTime = now;
  }
  res.status(200).end();
}
