// Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navMenu.classList.remove('active');
        }
    });
});

// Countdown Timer
function updateCountdown() {
    const eventDate = new Date('2025-11-29T10:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    }
});

// Chatbot Toggle
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.getElementById('chatbotContainer');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotSend = document.getElementById('chatbotSend');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotMessages = document.getElementById('chatbotMessages');

chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle('active');
});

chatbotClose.addEventListener('click', () => {
    chatbotContainer.classList.remove('active');
});

// Chatbot Responses
const chatbotResponses = {
    'events': 'We have 4 exciting cybersecurity events: 1. Cyber Brain Battle (Cybersecurity Quiz), 2. Cyber Grid Quest (Crossword Puzzle), 3. Cyber Sherlock (Spot the Hack Challenge), and 4. Cyber Meme Mania (Meme Creation Contest).',
    'cyber brain battle': 'Cyber Brain Battle is a cybersecurity quiz that tests your knowledge of information security, network security, cryptography, and cyber threats. Challenge yourself with tricky questions!',
    'cyber grid quest': 'Cyber Grid Quest is a cybersecurity-themed crossword puzzle. Solve clues related to security terms, concepts, and technologies to complete the grid.',
    'cyber sherlock': 'Cyber Sherlock is a "Spot the Hack" challenge where you identify security vulnerabilities, spot phishing attempts, and detect malicious activities. Put your detective skills to the test!',
    'cyber meme mania': 'Cyber Meme Mania is a meme creation contest. Create funny and educational cybersecurity-themed memes that spread awareness while making people laugh!',
    'schedule': 'The event is scheduled for 29th November 2025 (Saturday) from 10:00 AM to 12:00 PM. All events will be conducted simultaneously online during this 2-hour window.',
    'registration': 'Registration is completely FREE! No registration fee required. You can participate in multiple events with a single registration.',
    'free': 'Yes! Registration is absolutely FREE. No charges, no fees. Just register and participate!',
    'fee': 'There is NO registration fee. The event is completely free for all participants.',
    'eligibility': 'All college students (both UG and PG) are welcome to participate in this online cybersecurity contest.',
    'certificate': 'E-certificates will be provided to all participants who complete the events.',
    'prizes': 'This is a participation-focused event. E-certificates will be provided to all participants. No monetary prizes.',
    'online': 'Yes! This is an ONLINE event. You can participate from anywhere with an internet connection.',
    'date': 'The event is scheduled for 29th November 2025 (Saturday) from 10:00 AM to 12:00 PM.',
    'time': 'The event runs from 10:00 AM to 12:00 PM on 29th November 2025.',
    'college': 'The event is organized by the Department of Master of Computer Applications (MCA) at K.S.Rangasamy College of Technology, Autonomous, Tiruchengode. The Department of MCA is organizing this online cybersecurity contest.',
    'mca': 'Yes! This event is organized by the Department of Master of Computer Applications (MCA) at K.S.Rangasamy College of Technology. The MCA Department is proud to present this online cybersecurity awareness event.',
    'department': 'The Department of Master of Computer Applications (MCA) is organizing this online cybersecurity contest. The MCA Department invites all students to participate in this free online event.',
    'organizer': 'This event is organized by the Department of Master of Computer Applications (MCA) at K.S.Rangasamy College of Technology. The MCA Department is conducting this online cybersecurity contest.',
    'think before you click': 'That\'s our theme! "Think Before You Click!" promotes cybersecurity awareness and safe online practices. Always verify before clicking links or sharing information online.',
    'hello': 'Hello! Welcome to CYBER SHIELD 2K25! Remember: Think Before You Click! 🛡️ How can I help you today?',
    'hi': 'Hi! Welcome to CYBER SHIELD 2K25! How can I assist you? Ask me about events, registration, or schedule.',
    'help': 'I can help you with information about the 4 cybersecurity events, schedule (29th Nov, 10 AM-12 PM), FREE registration, E-certificates, and more. What would you like to know?'
};

function getChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    for (const [key, response] of Object.entries(chatbotResponses)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }
    
    return 'I\'m here to help! You can ask me about the 4 cybersecurity events, schedule (29th Nov, 10 AM-12 PM), FREE registration, E-certificates, or any other information about CYBER SHIELD 2K25. Remember: Think Before You Click! 🛡️';
}

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${isUser ? 'user' : 'bot'}`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatbotInput.value = '';
        
        setTimeout(() => {
            const response = getChatbotResponse(message);
            addMessage(response, false);
        }, 500);
    }
}

chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Quick Action Buttons
document.querySelectorAll('.quick-action-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const action = btn.textContent.toLowerCase();
        chatbotInput.value = action;
        sendMessage();
    });
});

// Register Button Actions
const registrationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd2BiJriikogMKdhZGTIQvGqFB7nuOE5FQPu0aR0ACU5gcSSw/viewform';
const rulesUrl = 'https://srmvcasapp.neocities.org/rules';
document.querySelectorAll('.register-button, .cta-button, .btn-register').forEach(btn => {
    btn.addEventListener('click', () => {
        window.open(registrationUrl, '_blank', 'noopener');
    });
});

// Rules Button Actions
document.querySelectorAll('.btn-rules').forEach(btn => {
    btn.addEventListener('click', () => {
        window.open(rulesUrl, '_blank', 'noopener');
    });
});

// Enhanced Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                entry.target.classList.add('animated');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe all cards and sections with staggered animations
document.querySelectorAll('.about-card, .organizer-card, .event-card, .info-item, .schedule-item').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px) scale(0.95)';
    el.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
});

// Add animation to sections on scroll
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// Add active class to nav links on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

