const chat = document.getElementById('chat');
const form = document.getElementById('form');
const message = document.getElementById('message');
const notif = document.getElementById('notif');

function addMessage(text, sender) {
    const msg = document.createElement('div');
    msg.className = sender === 'user' ? 'text-left' : 'text-right text-purple-600';
    msg.innerText = text;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
}

form.onsubmit = async (e) => {
    e.preventDefault();
    const msg = message.value;
    addMessage(msg, 'user');
    await fetch('/api/inbox', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg })
    });
    message.value = '';
};

setInterval(async () => {
    const res = await fetch('/api/reply');
    const data = await res.json();
    if (data.reply && data.reply !== window.lastReply) {
        addMessage(data.reply, 'admin');
        notif.play();
        window.lastReply = data.reply;
    }
}, 3000);