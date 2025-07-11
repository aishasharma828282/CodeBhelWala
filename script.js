// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(102, 126, 234, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        navbar.style.backdropFilter = 'none';
    }
});

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .menu-item, .team-member, .gallery-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Fun interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add click effect to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            let ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add hover effect to feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateX(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0)';
        });
    });
    
    // Floating animation for emojis
    document.querySelectorAll('.floating-emoji').forEach(emoji => {
        emoji.addEventListener('click', function() {
            this.style.animation = 'bounce 0.5s ease';
            setTimeout(() => {
                this.style.animation = 'float 3s ease-in-out infinite';
            }, 500);
        });
    });
    
    // Add copy functionality to code snippets
    document.querySelectorAll('.code-snippet').forEach(snippet => {
        // Add copy button
        const copyBtn = document.createElement('button');
        copyBtn.innerHTML = '📋 Copy Code';
        copyBtn.className = 'copy-btn';
        copyBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: #ffd700;
            color: #333;
            border: none;
            padding: 0.3rem 0.6rem;
            border-radius: 5px;
            font-size: 0.8rem;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease;
            font-weight: 600;
        `;
        
        snippet.appendChild(copyBtn);
        
        // Show copy button on hover
        snippet.addEventListener('mouseenter', () => {
            copyBtn.style.opacity = '1';
        });
        
        snippet.addEventListener('mouseleave', () => {
            copyBtn.style.opacity = '0';
        });
        
        // Copy functionality
        copyBtn.addEventListener('click', async (e) => {
            e.stopPropagation();
            const codeText = snippet.querySelector('code').textContent;
            
            try {
                await navigator.clipboard.writeText(codeText);
                copyBtn.innerHTML = '✅ Copied!';
                copyBtn.style.background = '#50fa7b';
                
                setTimeout(() => {
                    copyBtn.innerHTML = '📋 Copy Code';
                    copyBtn.style.background = '#ffd700';
                }, 2000);
            } catch (err) {
                console.log('Copy failed:', err);
                copyBtn.innerHTML = '❌ Failed';
                setTimeout(() => {
                    copyBtn.innerHTML = '📋 Copy Code';
                }, 2000);
            }
        });
        
        // Add click-to-copy message
        snippet.addEventListener('click', () => {
            if (snippet.querySelector('.copy-message')) return;
            
            const message = document.createElement('div');
            message.className = 'copy-message';
            message.textContent = 'Click the copy button to copy code!';
            message.style.cssText = `
                position: absolute;
                bottom: -30px;
                left: 50%;
                transform: translateX(-50%);
                background: #333;
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 5px;
                font-size: 0.8rem;
                white-space: nowrap;
                opacity: 0;
                animation: fadeInOut 3s ease-in-out;
                pointer-events: none;
            `;
            
            snippet.appendChild(message);
            
            setTimeout(() => {
                message.remove();
            }, 3000);
        });
    });
});

// Add ripple effect CSS
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Console message for developers
console.log(`
🍛 Welcome to TechBhel! 🍛
===============================
function orderFood() {
    const hunger = confirm("Are you hungry?");
    if (hunger) {
        window.location.href = "tel:+919876543210";
        return "Order placed! 🎉";
    } else {
        return "Come back when you're hungry! 😊";
    }
}

Try running: orderFood()
===============================
`); 