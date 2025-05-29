    if (localStorage.getItem('admin-auth') !== 'yes') {
      window.location.href = '/login';
    }

    const chat = document.getElementById('chat');
    const replyInput = document.getElementById('reply');
    const replyForm = document.getElementById('reply-form');
    const notif = document.getElementById('notif').play();


    let lastMsg = '';

    function addMessage(text, sender) {
      const msg = document.createElement('div');
      msg.className = sender === 'user' ? 'text-left' : 'text-right text-purple-600';
      msg.innerText = text;
      chat.appendChild(msg);
      chat.scrollTop = chat.scrollHeight;
    }

    setInterval(async () => {
      const res = await fetch('/api/inbox');
      const data = await res.json();
      if (data.message && data.message !== lastMsg) {
        addMessage(`${data.user}: ${data.message}`, 'user');
        notif.play();
        lastMsg = data.message;
      }
    }, 3000);

    replyForm.onsubmit = async (e) => {
      e.preventDefault();
      const replyText = replyInput.value;
      addMessage(`Admin: ${replyText}`, 'admin');
      await fetch('/api/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reply: replyText })
      });
      replyInput.value = '';
    };