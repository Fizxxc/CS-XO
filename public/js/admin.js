if (localStorage.getItem('admin-auth') !== 'yes') {
    window.location.href = '/login';
}

const lastMsg = document.getElementById('last-message');
const replyForm = document.getElementById('reply-form');
const replyInput = document.getElementById('reply');
const notifSound = document.getElementById('notif');
let lastUserMessage = '';

setInterval(async () => {
    const res = await fetch('/api/inbox');
    const data = await res.json();
    if (data.message && data.message !== lastUserMessage) {
        lastMsg.textContent = `User: ${data.message}`;
        notifSound.play();
        lastUserMessage = data.message;
    }
}, 3000);

replyForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const replyText = replyInput.value;
    await fetch('/api/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reply: replyText })
    });
    Swal.fire('Terkirim!', 'Balasan sudah dikirim.', 'success');
    replyInput.value = '';
});