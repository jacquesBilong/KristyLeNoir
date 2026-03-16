// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Cache le loader après chargement
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
        document.body.classList.add('loaded');
    }, 1500);

    // Initialise AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 50,
        easing: 'ease-out-cubic'
    });

    // Initialise les particules
    initParticles();

    // Navigation scroll effect
    initNavbar();

    // Menu mobile
    initMobileMenu();

    // Filtres portfolio
    initPortfolioFilters();

    // Smooth scroll pour les ancres
    initSmoothScroll();

    // Formulaire de contact
    initContactForm();

    // Langue toggle
    initLangToggle();

    // Chargement des créations
    loadCreations();
});

// ===== PARTICULES =====
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(201, 168, 76, ${Math.random() * 0.3});
            border-radius: 50%;
            left: ${posX}%;
            top: ${posY}%;
            animation: float ${duration}s ${delay}s infinite;
            pointer-events: none;
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active le lien de navigation correspondant
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== MENU MOBILE =====
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animation du burger
        const spans = menuToggle.querySelectorAll('span');
        if (menuToggle.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Ferme le menu au clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// ===== PORTFOLIO FILTERS =====
function initPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Active le bouton
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filtre les éléments
            const filter = btn.dataset.filter;
            filterGallery(filter);
        });
    });
}

function filterGallery(filter) {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 50);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== CONTACT FORM =====
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Récupère les données
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Affiche un message de chargement
            const submitBtn = form.querySelector('.btn-submit');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Envoi en cours...';
            submitBtn.disabled = true;
            
            try {
                // Simule un envoi (à remplacer par votre API)
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Succès
                alert('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
                form.reset();
            } catch (error) {
                alert('Une erreur est survenue. Veuillez réessayer.');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

// ===== LANGUE TOGGLE =====
function initLangToggle() {
    const langBtns = document.querySelectorAll('.lang-toggle span');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const lang = btn.textContent.toLowerCase();
            // Ici vous pouvez implémenter la logique de changement de langue
            console.log(`Langue changée : ${lang}`);
        });
    });
}

// ===== CHARGEMENT DES CRÉATIONS =====
function loadCreations() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;
    
    const creations = [
        {
            id: 1,
            category: 'evening',
            title: 'Nuit Impériale',
            year: '2026',
            desc: 'Robe de soirée en velours structuré et éclats dorés.',
            image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id: 2,
            category: 'ready',
            title: 'Ligne Atelier',
            year: '2026',
            desc: 'Silhouette urbaine épurée, pensée pour le quotidien raffiné.',
            image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id: 3,
            category: 'couture',
            title: 'Ornement Nocturne',
            year: '2025',
            desc: 'Pièce couture architecturée aux volumes sculpturaux.',
            image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id: 4,
            category: 'sketches',
            title: 'Étude de silhouette I',
            year: '2025',
            desc: 'Croquis d\'intention entre fluidité et tension graphique.',
            image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id: 5,
            category: 'collections',
            title: 'Collection Aura',
            year: '2026',
            desc: 'Une narration lumineuse entre violet profond et or satiné.',
            image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id: 6,
            category: 'evening',
            title: 'Velours Minuit',
            year: '2024',
            desc: 'Lignes longues, présence silencieuse, élégance souveraine.',
            image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80'
        }
    ];
    
    gallery.innerHTML = creations.map(creation => `
        <div class="gallery-item" data-category="${creation.category}" data-aos="fade-up">
            <img src="${creation.image}" alt="${creation.title}" loading="lazy">
            <div class="gallery-overlay">
                <h3>${creation.title}</h3>
                <p>${creation.year} — ${creation.desc}</p>
            </div>
        </div>
    `).join('');
}

// ===== AJOUT DES STYLES D'ANIMATION =====
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0) translateX(0); }
        25% { transform: translateY(-20px) translateX(10px); }
        50% { transform: translateY(-10px) translateX(-10px); }
        75% { transform: translateY(10px) translateX(5px); }
    }
    
    .particle {
        will-change: transform;
    }
`;
document.head.appendChild(style);