# CYBER SHIELD 2K25 - Online Cybersecurity Contest Website

A modern, responsive website for CYBER SHIELD 2K25, an online cybersecurity contest with the theme "Think Before You Click!" organized by the Department of Master of Computer Applications at K.S.Rangasamy College of Technology. Built with HTML, CSS, and JavaScript.

## Event Information

- **Event Name:** CYBER SHIELD 2K25
- **Theme:** Think Before You Click!
- **Date:** 29th November 2025 (Saturday)
- **Time:** 10:00 AM – 12:00 PM
- **Mode:** Online Event
- **Registration:** FREE (No registration fee)
- **Certificates:** E-certificates for all participants
- **Organized By:** Department of Master of Computer Applications, K.S.Rangasamy College of Technology, Autonomous, Tiruchengode

## Contest Events

1. **Cyber Brain Battle** - Cybersecurity Quiz
2. **Cyber Grid Quest** - Crossword Puzzle
3. **Cyber Sherlock** - Spot the Hack Challenge
4. **Cyber Meme Mania** - Meme Creation Contest

## Features

- 🎨 Modern, dark-themed UI with gradient accents
- 📱 Fully responsive design for all devices
- ⏰ Live countdown timer to event date (29th Nov 2025, 10:00 AM)
- 💬 Interactive chatbot assistant
- 🎯 Smooth scrolling navigation
- ✨ Scroll animations and hover effects
- 📋 Event information and schedules
- 🛡️ Cybersecurity-themed design
- 📝 General information and guidelines

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser

### For Development

If you want to run a local server (recommended):

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```
cybershield/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## Customization

### Changing the Event Date

Edit the countdown timer date in `script.js`:
```javascript
const eventDate = new Date('2025-11-29T10:00:00').getTime();
```

### Updating Colors

Modify the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... */
}
```

### Adding/Removing Events

Edit the events section in `index.html` and add corresponding styles in `styles.css`.

### Customizing Chatbot Responses

Update the `chatbotResponses` object in `script.js`:
```javascript
const chatbotResponses = {
    'your keyword': 'Your response here',
    // ...
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons (via CDN)

## Features Breakdown

### Navigation
- Fixed navbar with smooth scroll
- Mobile-responsive hamburger menu
- Active link highlighting

### Hero Section
- Animated event title
- Live countdown timer
- Call-to-action buttons

### Interactive Chatbot
- Quick action buttons
- Context-aware responses
- Smooth animations

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and phones
- Touch-friendly interface

## License

This project is open source and available for educational purposes.

## Contact

For questions or support, please contact the development team.

---

## Event Highlights

- ✅ **FREE Registration** - No charges, no fees
- ✅ **Online Event** - Participate from anywhere
- ✅ **E-Certificates** - For all participants
- ✅ **4 Exciting Contests** - Test your cybersecurity skills
- ✅ **Theme: Think Before You Click!** - Promoting cybersecurity awareness

---

**Developed with ❤️ for CYBER SHIELD 2K25**

**Organized by:** Department of Master of Computer Applications  
**K.S.Rangasamy College of Technology, Autonomous, Tiruchengode**

