// DOM Elements
const loader = document.getElementById('loader');
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const typingText = document.getElementById('typing-text');
const codeDisplay = document.getElementById('code-display');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader after page loads
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2000);

    // Initialize all components
    console.log('Starting initialization...');
    initializeNavigation();
    initializeTypingEffect();
    initializeCodeEditor();
    loadProjects();
    loadExperience();
    loadSkills();
    loadContactInfo();
    loadSocialService();
    initializePhotoModal();
    initializeScrollAnimations();
    initializeContactForm();
    
    // Load photo galleries after a delay to ensure DOM is ready
    setTimeout(() => {
        console.log('Loading photo galleries...');
        loadNCCGallery();
        loadCertificates();
    }, 200);
    
    // Hide loader
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
    }, 2000);
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // Close mobile menu if open
            navMenu.classList.remove('active');
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Typing effect for hero title
function initializeTypingEffect() {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeText() {
        const currentText = TYPING_TEXTS[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            // Pause at end of text
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % TYPING_TEXTS.length;
            typingSpeed = 500;
        }

        setTimeout(typeText, typingSpeed);
    }

    typeText();
}

// Code editor typing effect
function initializeCodeEditor() {
    let charIndex = 0;
    const typingSpeed = 30;

    function typeCode() {
        if (charIndex < CODE_CONTENT.length) {
            codeDisplay.textContent = CODE_CONTENT.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeCode, typingSpeed);
        }
    }

    // Start typing after a short delay
    setTimeout(typeCode, 1000);
}

// Load projects dynamically
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    PROJECTS.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.liveLink}" class="liquid-glass" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                    Live Demo
                </a>
                <a href="${project.githubLink}" class="liquid-glass" target="_blank">
                    <i class="fab fa-github"></i>
                    GitHub
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Load experience timeline
function loadExperience() {
    const timeline = document.getElementById('timeline');
    
    EXPERIENCE.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3 class="timeline-title">${item.title}</h3>
                <div class="timeline-date">${item.date}</div>
                <h4 style="color: #a855f7; margin-bottom: 0.5rem;">${item.subtitle}</h4>
                <p style="color: #a855f7; font-weight: 500; margin-bottom: 0.5rem;">${item.organization}</p>
                <p class="timeline-description">${item.description}</p>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });

    // Add achievements section
    const achievementsItem = document.createElement('div');
    achievementsItem.className = 'timeline-item';
    achievementsItem.innerHTML = `
        <div class="timeline-content">
            <h3 class="timeline-title">Leadership & Achievements</h3>
            <div class="timeline-date">Various Years</div>
            <ul style="color: rgba(255, 255, 255, 0.8); line-height: 1.8;">
                ${ACHIEVEMENTS.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        </div>
    `;
    timeline.appendChild(achievementsItem);
}

// Load skills grid
function loadSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    
    SKILLS.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        
        skillItem.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <div class="skill-name">${skill.name}</div>
        `;
        
        skillsGrid.appendChild(skillItem);
    });
}

// Load social service section
function loadSocialService() {
    const serviceGrid = document.getElementById('service-grid');
    
    SOCIAL_SERVICE.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        
        serviceCard.innerHTML = `
            <div class="service-card-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3 class="service-card-title">${service.title}</h3>
            <p class="service-card-description">${service.description}</p>
        `;
        
        serviceGrid.appendChild(serviceCard);
    });
}

// Load NCC Gallery
function loadNCCGallery() {
    console.log('Loading NCC Gallery...');
    const nccGallery = document.getElementById('ncc-gallery');
    
    if (!nccGallery) {
        console.error('NCC gallery element not found');
        return;
    }
    
    if (!NCC_PHOTOS || NCC_PHOTOS.length === 0) {
        console.error('No NCC photos data found');
        return;
    }
    
    console.log('Found', NCC_PHOTOS.length, 'NCC photos to load');
    NCC_PHOTOS.forEach(photo => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="${photo.image}" alt="${photo.title}" loading="lazy" onerror="console.error('Failed to load image: ${photo.image}'); this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pgo8L3N2Zz4=';">
            <div class="gallery-overlay">
                <div class="gallery-title">${photo.title}</div>
                <div class="gallery-description">${photo.description}</div>
            </div>
        `;
        
        // Add click event to open modal
        galleryItem.addEventListener('click', () => {
            openPhotoModal(photo.image, photo.title);
        });
        
        nccGallery.appendChild(galleryItem);
    });
}

// Initialize photo modal functionality
function initializePhotoModal() {
    const modal = document.getElementById('photo-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    // Close modal when clicking the X button
    closeBtn.addEventListener('click', closePhotoModal);
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closePhotoModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePhotoModal();
        }
    });
}

// Open photo modal
function openPhotoModal(imageSrc, title) {
    const modal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
    
    modalImage.src = imageSrc;
    modalImage.alt = title;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close photo modal
function closePhotoModal() {
    const modal = document.getElementById('photo-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Load certificates gallery
function loadCertificates() {
    console.log('Loading Certificates Gallery...');
    const certificatesGallery = document.getElementById('certificates-gallery');
    
    if (!certificatesGallery) {
        console.error('Certificates gallery element not found');
        return;
    }
    
    if (!CERTIFICATES || CERTIFICATES.length === 0) {
        console.error('No certificates data found');
        return;
    }
    
    console.log('Found', CERTIFICATES.length, 'certificates to load');
    CERTIFICATES.forEach(certificate => {
        const certificateCard = document.createElement('div');
        certificateCard.className = 'certificate-card';
        
        certificateCard.innerHTML = `
            <div class="certificate-image">
                <img src="${certificate.image}" alt="${certificate.title}" loading="lazy" onerror="console.error('Failed to load certificate image: ${certificate.image}'); this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q2VydGlmaWNhdGU8L3RleHQ+Cjx0ZXh0IHg9IjE1MCIgeT0iMTIwIiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Tm90IEZvdW5kPC90ZXh0Pgo8L3N2Zz4=';">
                <div class="certificate-icon" style="display: none;">
                    <i class="${certificate.icon}"></i>
                </div>
                <div class="certificate-overlay">
                    <i class="fas fa-expand-alt"></i>
                </div>
            </div>
            <div class="certificate-info">
                <h3 class="certificate-title">${certificate.title}</h3>
                <div class="certificate-organization">${certificate.organization}</div>
                <p class="certificate-description">${certificate.description}</p>
                <div class="certificate-date">${certificate.date}</div>
                <div class="certificate-actions">
                    <button class="cert-btn" onclick="openPhotoModal('${certificate.image}', '${certificate.title}')">
                        <i class="fas fa-certificate"></i> View Certificate
                    </button>
                    ${certificate.receivingPhoto ? `<button class="cert-btn receiving-btn" data-receiving-photo="${certificate.receivingPhoto}" data-title="Receiving ${certificate.title}">
                        <i class="fas fa-camera"></i> Receiving Photo
                    </button>` : ''}
                </div>
            </div>
        `;
        
        // Add click event to open modal
        certificateCard.addEventListener('click', () => {
            openPhotoModal(certificate.image, certificate.title);
        });
        
        // Add event listeners for receiving photo buttons (only if they exist)
        const receivingBtn = certificateCard.querySelector('.receiving-btn');
        if (receivingBtn) {
            receivingBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const photoPath = receivingBtn.getAttribute('data-receiving-photo');
                const title = receivingBtn.getAttribute('data-title');
                
                const img = new Image();
                img.onload = () => {
                    openPhotoModal(photoPath, title);
                };
                img.onerror = () => {
                    alert('Receiving photo not available yet. Please add the image file: ' + photoPath.split('/').pop());
                };
                img.src = photoPath;
            });
        }
        
        certificatesGallery.appendChild(certificateCard);
    });
}

// Load contact information
function loadContactInfo() {
    const contactInfo = document.getElementById('contact-info');
    
    const contactItems = [
        {
            icon: 'fas fa-envelope',
            label: 'Email',
            value: CONTACT_INFO.email,
            link: `mailto:${CONTACT_INFO.email}`
        },
        {
            icon: 'fas fa-phone',
            label: 'Phone',
            value: CONTACT_INFO.phone,
            link: `tel:${CONTACT_INFO.phone}`
        },
        {
            icon: 'fab fa-linkedin',
            label: 'LinkedIn',
            value: 'LinkedIn Profile',
            link: `https://${CONTACT_INFO.linkedin}`
        },
        {
            icon: 'fas fa-map-marker-alt',
            label: 'Location',
            value: CONTACT_INFO.location,
            link: '#'
        }
    ];

    contactItems.forEach(item => {
        const contactItem = document.createElement('div');
        contactItem.className = 'contact-item';
        
        contactItem.innerHTML = `
            <div class="contact-icon">
                <i class="${item.icon}"></i>
            </div>
            <div class="contact-details">
                <h4>${item.label}</h4>
                <a href="${item.link}" style="color: rgba(255, 255, 255, 0.8); text-decoration: none;">
                    ${item.value}
                </a>
            </div>
        `;
        
        contactInfo.appendChild(contactItem);
    });

    // Add social links
    const socialLinksContainer = document.createElement('div');
    socialLinksContainer.innerHTML = `
        <h4 style="margin-bottom: 1rem; color: #a855f7;">Follow Me</h4>
        <div style="display: flex; gap: 1rem;">
            ${SOCIAL_LINKS.map(social => `
                <a href="${social.url}" target="_blank" style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 50px;
                    height: 50px;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    color: ${social.color};
                    font-size: 1.2rem;
                    transition: all 0.3s ease;
                    text-decoration: none;
                " onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 20px rgba(168, 85, 247, 0.3)';" 
                   onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                    <i class="${social.icon}"></i>
                </a>
            `).join('')}
        </div>
    `;
    
    contactInfo.appendChild(socialLinksContainer);
}

// Initialize scroll animations
function initializeScrollAnimations() {
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

    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll('section, .project-card, .timeline-item, .skill-item, .contact-item');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize contact form functionality
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');
    
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        showFormStatus('Sending your message...', 'loading');
        
        try {
            // Simulate sending email (in real implementation, you'd use EmailJS or backend API)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            showFormStatus('Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
            
            // Reset form
            form.reset();
            
            // Reset button
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            submitBtn.style.background = 'rgba(34, 197, 94, 0.3)';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
            
        } catch (error) {
            console.error('Error:', error);
            showFormStatus('Sorry, there was an error sending your message. Please try again.', 'error');
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Show form status message
function showFormStatus(message, type) {
    const statusDiv = document.getElementById('form-status');
    if (!statusDiv) return;
    
    statusDiv.textContent = message;
    statusDiv.className = `form-status ${type}`;
    statusDiv.style.display = 'block';
    
    // Auto-hide after 5 seconds for success/error messages
    if (type !== 'loading') {
        setTimeout(() => {
            statusDiv.style.display = 'none';
        }, 5000);
    }
}

// Add smooth hover effects for project cards
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }, 100);
});
