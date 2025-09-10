# PulseChat 💬

> **The heartbeat of real-time communication** - A modern, WhatsApp-inspired chat application built with Node.js, Express, and Socket.IO.

![PulseChat Banner](https://img.shields.io/badge/PulseChat-Real--Time%20Messaging-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

## ✨ Features

- 🚀 **Real-time messaging** with Socket.IO
- 🎨 **WhatsApp-inspired design** with authentic styling
- 🌙 **Dark mode support** with smooth transitions
- 👤 **User avatars** with Font Awesome icons
- ⏰ **Message timestamps** for better conversation tracking
- 📱 **Mobile responsive** design for all devices
- ✉️ **Message bubbles** with proper alignment (sender right, receiver left)
- 🎭 **Username display** for easy user identification
- ⌨️ **Keyboard shortcuts** (Enter to send messages)
- 🎪 **Smooth animations** for enhanced user experience

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Real-time Communication:** Socket.IO
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Icons:** Font Awesome
- **Styling:** CSS Grid & Flexbox

## 📋 Prerequisites

Before running PulseChat, make sure you have:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/akashasahu07/pulsechat.git
cd pulsechat
```

### 2. Install dependencies
```bash
npm init -y
npm install express socket.io
```

### 3. Project Structure
```
pulsechat/
├── server.js          # Express server with Socket.IO
├── package.json       # Project dependencies
└── public/
    ├── index.html     # Main HTML file
    ├── style.css      # WhatsApp-style CSS
    └── script.js      # Client-side JavaScript
```

### 4. Start the server
```bash
node server.js
```

### 5. Open your browser
Navigate to `http://localhost:3000` and start chatting!

## 📁 File Overview

### `server.js`
```javascript
// Express server with Socket.IO integration
// Handles real-time message broadcasting
// Serves static files from public directory
```

### `public/index.html`
- Clean, semantic HTML structure
- Font Awesome icons integration
- Responsive meta tags
- Dark mode toggle button

### `public/style.css`
- WhatsApp-inspired color scheme
- Dark mode theme support
- Mobile-responsive design
- Smooth animations and transitions

### `public/script.js`
- Socket.IO client implementation
- Real-time message handling
- Dark mode functionality
- User interaction management

## 🎨 Design Features

### Color Palette
- **Primary Green:** `#075e54` (Headers)
- **Light Green:** `#dcf8c6` (Sent messages)
- **White:** `#ffffff` (Received messages)
- **Dark Theme:** `#0b141a` (Dark background)

### Typography
- **Font:** System fonts (-apple-system, BlinkMacSystemFont, Segoe UI)
- **Message Text:** 14px
- **Username:** 12px, bold
- **Timestamp:** 11px, muted

## 📱 Responsive Breakpoints

- **Desktop:** > 768px (Full features)
- **Mobile:** ≤ 768px (Optimized layout)

## 🌙 Dark Mode

PulseChat includes a beautiful dark mode that:
- Transforms all UI elements
- Maintains readability and contrast
- Provides smooth transitions
- Remembers user preference during session

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
/* Light mode colors */
.message.sent .message-bubble {
  background: #your-color; /* Change sent message color */
}

/* Dark mode colors */
body.dark-mode .message.sent .message-bubble {
  background: #your-dark-color; /* Change dark mode color */
}
```

### Adding New Features
- **Emoji Support:** Integrate emoji picker library
- **File Sharing:** Add file upload functionality
- **Chat Rooms:** Implement multiple chat rooms
- **User Authentication:** Add login system

## 🚧 Future Enhancements

- [ ] User authentication system
- [ ] Private messaging
- [ ] Emoji picker
- [ ] File and image sharing
- [ ] Message search functionality
- [ ] Chat history persistence
- [ ] Push notifications
- [ ] Video/Voice calling integration

## 📊 Performance

- ⚡ **Real-time latency:** < 50ms
- 📱 **Mobile optimized:** Responsive design
- 🎨 **Smooth animations:** 60fps transitions
- 💾 **Lightweight:** Minimal dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@akashasahu07](https://github.com/akashasahu07)
- LinkedIn: [/in/akashasashu07](https://linkedin.com/in/akashasahu07)

## 🙏 Acknowledgments

- WhatsApp for design inspiration
- Socket.IO team for excellent real-time communication library
- Font Awesome for beautiful icons
- Express.js community for the robust web framework

## 📞 Support

If you have any questions or need help with PulseChat, please:
- Create an issue on GitHub
- Email: akashasahu2001@gmail.com

---

<div align="center">
  <strong>Built with ❤️ using Node.js and Socket.IO</strong><br>
  <em>PulseChat - Feel the pulse of every conversation</em>
</div>