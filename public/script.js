const socket = io();
let username = "";

// Ask user for name once
while (!username) {
    username = prompt("Enter your name:");
}

function sendMessage() {
    const input = document.getElementById("messageInput");
    if (input.value.trim()) {
        socket.emit("chat message", { user: username, text: input.value });
        input.value = "";
    }
}

socket.on("chat message", function (msg) {
    addMessage(msg.text, msg.user === username ? 'sent' : 'received', msg.user);
});

function addMessage(text, type, user) {
    const messagesList = document.getElementById('messages');
    const li = document.createElement('li');
    li.className = `message ${type}`;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Create user avatar with appropriate icon
    const avatarIcon = type === 'sent' ? 'fa-user' : 'fa-user';

    li.innerHTML = `
        <div class="user-avatar">
            <i class="fas ${avatarIcon}"></i>
        </div>
        <div class="message-content">
            <div class="message-bubble">
                ${type === 'received' ? `<div class="username">${user}</div>` : ''}
                <div class="message-text">${text}</div>
                <div class="message-time">${currentTime}</div>
            </div>
        </div>
    `;

    messagesList.appendChild(li);
    messagesList.scrollTop = messagesList.scrollHeight;
}

// Allow sending message with Enter key
document.getElementById('messageInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Dark mode functionality
let isDarkMode = false;

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    if (isDarkMode) {
        body.classList.add('dark-mode');
        themeIcon.className = 'fas fa-sun';
    } else {
        body.classList.remove('dark-mode');
        themeIcon.className = 'fas fa-moon';
    }

    // Store preference in memory for session
    window.darkModePreference = isDarkMode;
}

// Initialize dark mode from memory if available
if (window.darkModePreference) {
    toggleDarkMode();
}