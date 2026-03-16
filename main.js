/* =====================================================
   KRISTYLE LENOIR — main.js
   Traduction FR / EN intégrée + navigation par slides
   ===================================================== */

// ── DICTIONNAIRE ──────────────────────────────────────
const LANG = {
  fr: {
    /* NAV */
    nav_home:        'Accueil',
    nav_about:       'À Propos',
    nav_creations:   'Créations',
    nav_collections: 'Collections',
    nav_services:    'Services',
    nav_contact:     'Contact',
    /* BTN nav */
    bnav_home:        'Accueil',
    bnav_about:       'À Propos',
    bnav_creations:   'Créations',
    bnav_collections: 'Collections',
    bnav_services:    'Services',
    bnav_contact:     'Contact',
    /* HERO */
    hero_eyebrow: 'Haute Couture · Dessinatrice · Modéliste',
    hero_sub:     '"L\'élégance est la seule beauté qui ne se démode jamais."',
    hero_cta1:    'Découvrir les créations',
    hero_cta2:    'Mon univers',
    hero_scroll:  'Défiler',
    /* ABOUT */
    about_eyebrow: 'À Propos',
    about_title:   'L\'art de tisser des <em>rêves</em>',
    about_body1:   'Kristyle Lenoir est une créatrice dont le talent transcende les frontières. Dessinatrice, couturière, styliste et modéliste, elle conjugue un savoir-faire artisanal à une vision artistique contemporaine — pour créer des pièces uniques qui racontent une histoire.',
    about_body2:   'Sa signature : des lignes sculpturales, des tons profonds rehaussés d\'or et de violet, une féminité à la fois puissante et délicate.',
    about_tag:     'Créatrice',
    tl1: 'Diplôme de modélisme, École Supérieure des Arts',
    tl2: 'Première collection « Nocturne », acclamée',
    tl3: 'Ouverture de l\'Atelier KLN',
    tl4: 'Invitée d\'honneur — Fashion Week internationale',
    stat1_l: 'Collections',
    stat2_l: 'Pièces créées',
    stat3_l: 'Pays',
    /* CREATIONS */
    cr_eyebrow: 'Portfolio',
    cr_title:   'Mes <em>Créations</em>',
    f_all:       'Tout',
    f_evening:   'Soirée',
    f_couture:   'Haute Couture',
    f_ready:     'Prêt-à-Porter',
    f_sketches:  'Croquis',
    f_coll:      'Collections',
    /* gallery items */
    g1_title: 'Nuit Impériale',   g1_desc: 'Robe de soirée en velours structuré.',
    g2_title: 'Ligne Atelier',    g2_desc: 'Silhouette urbaine épurée.',
    g3_title: 'Ornement Nocturne',g3_desc: 'Pièce couture architecturée.',
    g4_title: 'Étude de silhouette', g4_desc: 'Croquis d\'intention graphique.',
    g5_title: 'Collection Aura',  g5_desc: 'Entre violet profond et or satiné.',
    g6_title: 'Velours Minuit',   g6_desc: 'Élégance souveraine et présence silencieuse.',
    /* COLLECTIONS */
    coll_eyebrow: 'Lookbook',
    coll_title:   'Mes <em>Collections</em>',
    lb1_season: 'Hiver 2025–2026', lb1_name: 'Sous la Lune',
    lb1_desc: 'Velours, crêpes noirs, broderies or pâle. Une inspiration opéra entre ombre et lumière. Chaque pièce est une scène, chaque silhouette une héroïne.',
    lb2_season: 'Printemps 2025', lb2_name: 'Architecture Sacrée',
    lb2_desc: 'Structures géométriques, drapés violets, transparences captivantes. Un hommage aux voûtes célestes — là où la mode rejoint l\'architecture.',
    lb3_season: 'Été 2024', lb3_name: 'Aura Dorée',
    lb3_desc: 'Légèreté, mousselines fluides, reflets dorés au soleil. Une collection solaire pour la femme qui illumine chaque espace qu\'elle traverse.',
    lb_cta: 'Voir la collection',
    /* SERVICES */
    svc_eyebrow: 'Savoir-faire',
    svc_title:   'Mes <em>Services</em>',
    s1_title: 'Création Sur-Mesure',   s1_desc: 'Chaque pièce naît d\'un dialogue unique — vos mensurations, votre personnalité, votre histoire. Trois essayages, une pièce exclusive.',
    s2_title: 'Consultation Stylisme', s2_desc: 'Analyse de morphologie, colorimétrie personnalisée, construction d\'un vestiaire cohérent qui révèle votre essence.',
    s3_title: 'Haute Couture',         s3_desc: 'Pièces de collection numérotées, d\'une élégance architecturale. Pour les événements qui méritent l\'exception.',
    s4_title: 'Collections & Défilés', s4_desc: 'Direction artistique complète — du premier croquis à la mise en scène du défilé. Une narration visuelle cohérente.',
    s5_title: 'Ateliers & Formation',  s5_desc: 'Ateliers privés ou en groupe : dessin de mode, patronage, techniques de couture. Transmettre le savoir, une passion.',
    s6_title: 'Collaborations Marques',s6_desc: 'Partenariats créatifs avec des maisons locales ou internationales pour forger une identité visuelle forte.',
    /* CONTACT */
    ct_eyebrow: 'Parlons de votre projet',
    ct_title:   'Entrons en <em>contact</em>',
    ct_quote:   '"Chaque création commence par une conversation."',
    ct_lbl1: 'Email', ct_val1: 'contact@kristylelenoir.com',
    ct_lbl2: 'Atelier', ct_val2: 'Sur rendez-vous uniquement',
    ct_lbl3: 'Disponibilités', ct_val3: 'Projets nationaux & internationaux',
    f_lbl_name: 'Nom complet', f_ph_name: 'Votre nom',
    f_lbl_email: 'Email', f_ph_email: 'votre@email.com',
    f_lbl_project: 'Votre projet', f_ph_project: 'Sur-mesure, collaboration, atelier…',
    f_lbl_msg: 'Message', f_ph_msg: 'Décrivez votre projet…',
    f_submit: 'Envoyer le message',
    f_sending: 'Envoi en cours…',
    f_success: 'Message envoyé ! Kristyle vous répondra très prochainement.',
    /* FOOTER */
    footer_tag: '"Où la mode devient art."',
    footer_copy: '© 2026 KLN Studio',
  },
  en: {
    nav_home:        'Home',
    nav_about:       'About',
    nav_creations:   'Creations',
    nav_collections: 'Collections',
    nav_services:    'Services',
    nav_contact:     'Contact',
    bnav_home:        'Home',
    bnav_about:       'About',
    bnav_creations:   'Creations',
    bnav_collections: 'Collections',
    bnav_services:    'Services',
    bnav_contact:     'Contact',
    hero_eyebrow: 'Haute Couture · Fashion Designer · Patternmaker',
    hero_sub:     '"Elegance is the only beauty that never fades."',
    hero_cta1:    'Discover the creations',
    hero_cta2:    'My universe',
    hero_scroll:  'Scroll',
    about_eyebrow: 'About',
    about_title:   'The art of weaving <em>dreams</em>',
    about_body1:   'Kristyle Lenoir is a creator whose talent transcends borders. Designer, seamstress, stylist and patternmaker, she combines artisanal expertise with a contemporary artistic vision — crafting unique pieces that tell a story.',
    about_body2:   'Her signature: sculptural lines, deep tones enhanced with gold and violet, a femininity that is both powerful and delicate.',
    about_tag:     'Creator',
    tl1: 'Degree in patternmaking, School of Fine Arts',
    tl2: 'First collection "Nocturne", acclaimed',
    tl3: 'Opening of KLN Studio',
    tl4: 'Guest of honour — International Fashion Week',
    stat1_l: 'Collections',
    stat2_l: 'Pieces created',
    stat3_l: 'Countries',
    cr_eyebrow: 'Portfolio',
    cr_title:   'My <em>Creations</em>',
    f_all:       'All',
    f_evening:   'Evening',
    f_couture:   'Haute Couture',
    f_ready:     'Ready-to-Wear',
    f_sketches:  'Sketches',
    f_coll:      'Collections',
    g1_title: 'Imperial Night',    g1_desc: 'Evening gown in structured velvet.',
    g2_title: 'Studio Line',       g2_desc: 'Clean urban silhouette.',
    g3_title: 'Nocturnal Ornament',g3_desc: 'Architectural couture piece.',
    g4_title: 'Silhouette Study',  g4_desc: 'Graphic intention sketch.',
    g5_title: 'Aura Collection',   g5_desc: 'Between deep violet and satin gold.',
    g6_title: 'Midnight Velvet',   g6_desc: 'Sovereign elegance and silent presence.',
    coll_eyebrow: 'Lookbook',
    coll_title:   'My <em>Collections</em>',
    lb1_season: 'Winter 2025–2026', lb1_name: 'Under the Moon',
    lb1_desc: 'Velvet, black crepes, pale gold embroidery. An opera-inspired vision between shadow and light. Each piece is a scene, each silhouette a heroine.',
    lb2_season: 'Spring 2025', lb2_name: 'Sacred Architecture',
    lb2_desc: 'Geometric structures, violet drapes, captivating transparencies. A tribute to celestial vaults — where fashion meets architecture.',
    lb3_season: 'Summer 2024', lb3_name: 'Golden Aura',
    lb3_desc: 'Lightness, fluid chiffons, golden reflections in sunlight. A solar collection for the woman who illuminates every space she enters.',
    lb_cta: 'View collection',
    svc_eyebrow: 'Expertise',
    svc_title:   'My <em>Services</em>',
    s1_title: 'Bespoke Creation',   s1_desc: 'Each piece is born from a unique dialogue — your measurements, your personality, your story. Three fittings, one exclusive piece.',
    s2_title: 'Style Consultation', s2_desc: 'Morphology analysis, personal colour consultation, building a coherent wardrobe that reveals your essence.',
    s3_title: 'Haute Couture',      s3_desc: 'Numbered collection pieces of architectural elegance. For events that deserve the exception.',
    s4_title: 'Collections & Shows',s4_desc: 'Complete artistic direction — from the first sketch to the runway staging. A coherent visual narrative.',
    s5_title: 'Workshops & Training',s5_desc: 'Private or group workshops: fashion drawing, patternmaking, sewing techniques. Sharing expertise with passion.',
    s6_title: 'Brand Collaborations',s6_desc: 'Creative partnerships with local or international houses to forge a strong and distinctive visual identity.',
    ct_eyebrow: 'Let\'s talk about your project',
    ct_title:   'Get in <em>touch</em>',
    ct_quote:   '"Every creation begins with a conversation."',
    ct_lbl1: 'Email', ct_val1: 'contact@kristylelenoir.com',
    ct_lbl2: 'Studio', ct_val2: 'By appointment only',
    ct_lbl3: 'Availability', ct_val3: 'National & international projects',
    f_lbl_name: 'Full name', f_ph_name: 'Your name',
    f_lbl_email: 'Email', f_ph_email: 'your@email.com',
    f_lbl_project: 'Your project', f_ph_project: 'Bespoke, collaboration, workshop…',
    f_lbl_msg: 'Message', f_ph_msg: 'Describe your project…',
    f_submit: 'Send message',
    f_sending: 'Sending…',
    f_success: 'Message sent! Kristyle will reply very soon.',
    footer_tag: '"Where fashion becomes art."',
    footer_copy: '© 2026 KLN Studio',
  }
};

// ── STATE ──────────────────────────────────────────────
let currentLang = 'fr';
let currentPage = 'home';
let isAnimating = false;
const PAGE_ORDER = ['home','about','creations','collections','services','contact'];

// ── TRANSLATE ─────────────────────────────────────────
function t(key) {
  return LANG[currentLang][key] || LANG['fr'][key] || key;
}

function applyTranslation() {
  const d = document;
  // Nav links
  d.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    const attr = el.getAttribute('data-t-attr');
    if (attr === 'placeholder') {
      el.placeholder = t(key);
    } else {
      el.innerHTML = t(key);
    }
  });
  // Gallery re-render keeps current filter active
  const activeFilter = d.querySelector('.filter-btn.active');
  renderGallery(activeFilter ? activeFilter.dataset.f : 'all');
}

function switchLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  applyTranslation();
}

// ── SLIDE ENGINE ──────────────────────────────────────
function goTo(id) {
  if (id === currentPage || isAnimating) return;
  isAnimating = true;

  const fromIdx = PAGE_ORDER.indexOf(currentPage);
  const toIdx   = PAGE_ORDER.indexOf(id);
  const goRight = toIdx > fromIdx;

  const leaving  = document.getElementById('page-' + currentPage);
  const arriving = document.getElementById('page-' + id);

  // Prepare arriving page off-screen
  arriving.classList.remove('active','slide-out-left','slide-out-right','slide-in-left','slide-in-right');
  arriving.style.position = 'absolute';
  arriving.style.top      = '0';
  arriving.style.width    = '100%';
  arriving.classList.add(goRight ? 'slide-in-right' : 'slide-in-left');
  arriving.style.display  = 'block';

  void arriving.offsetWidth; // force reflow

  requestAnimationFrame(() => {
    leaving.classList.add(goRight ? 'slide-out-left' : 'slide-out-right');
    leaving.classList.remove('active');
    arriving.classList.remove('slide-in-right', 'slide-in-left');
    arriving.classList.add('active');
    arriving.style.position = '';
    arriving.style.top      = '';
    arriving.style.width    = '';
  });

  setTimeout(() => {
    leaving.classList.remove('slide-out-left','slide-out-right','active');
    leaving.style.display = '';
    currentPage  = id;
    isAnimating  = false;
    updateNavHighlight();
    window.scrollTo(0, 0);
  }, 680);
}

function updateNavHighlight() {
  document.querySelectorAll('.bnav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.page === currentPage);
  });
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === currentPage);
  });
}

// ── GALLERY ───────────────────────────────────────────
const CREATIONS = [
  { id:1, cat:'evening',     img:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80', titleKey:'g1_title', descKey:'g1_desc', year:'2026' },
  { id:2, cat:'ready',       img:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', titleKey:'g2_title', descKey:'g2_desc', year:'2026' },
  { id:3, cat:'couture',     img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', titleKey:'g3_title', descKey:'g3_desc', year:'2025' },
  { id:4, cat:'sketches',    img:'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80', titleKey:'g4_title', descKey:'g4_desc', year:'2025' },
  { id:5, cat:'collections', img:'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', titleKey:'g5_title', descKey:'g5_desc', year:'2026' },
  { id:6, cat:'evening',     img:'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', titleKey:'g6_title', descKey:'g6_desc', year:'2024' },
];

function renderGallery(filter) {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const list = filter === 'all' ? CREATIONS : CREATIONS.filter(c => c.cat === filter);
  grid.innerHTML = list.map((c, i) => `
    <div class="g-item${i===0 && filter==='all' ? ' span2':''}" data-cat="${c.cat}"
         style="opacity:0;transform:translateY(18px);transition:opacity .45s ${i*.07}s,transform .45s ${i*.07}s">
      <img src="${c.img}" alt="${t(c.titleKey)}" loading="lazy">
      <div class="g-corner"></div>
      <div class="g-overlay">
        <div class="g-title">${t(c.titleKey)}</div>
        <div class="g-meta">${c.year} · ${t(c.descKey)}</div>
      </div>
    </div>`).join('');
  requestAnimationFrame(() => requestAnimationFrame(() => {
    grid.querySelectorAll('.g-item').forEach(el => {
      el.style.opacity = '1'; el.style.transform = 'translateY(0)';
    });
  }));
}

// ── PARTICLES ─────────────────────────────────────────
function initParticles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, pts = [];
  function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
  function mkPt() { return { x:Math.random()*w, y:Math.random()*h, r:Math.random()*1.4+.3, sx:(Math.random()-.5)*.17, sy:(Math.random()-.5)*.08, a:Math.random()*.2+.04 }; }
  function init() { resize(); pts = []; for(let i=0;i<45;i++) pts.push(mkPt()); }
  function draw() {
    ctx.clearRect(0,0,w,h);
    pts.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(201,168,76,${p.a})`; ctx.fill();
      p.x+=p.sx; p.y+=p.sy;
      if(p.x<0)p.x=w; if(p.x>w)p.x=0;
      if(p.y<0)p.y=h; if(p.y>h)p.y=0;
    });
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize', init);
  init(); draw();
}

// ── NAVBAR SCROLL ─────────────────────────────────────
function initNavbar() {
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ── MOBILE MENU ──────────────────────────────────────
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const menu   = document.getElementById('navMenu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    const spans = toggle.querySelectorAll('span');
    const open  = menu.classList.contains('open');
    spans[0].style.transform = open ? 'rotate(45deg) translate(6px,6px)' : 'none';
    spans[1].style.opacity   = open ? '0' : '1';
    spans[2].style.transform = open ? 'rotate(-45deg) translate(6px,-6px)' : 'none';
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.querySelectorAll('span').forEach(s => { s.style.transform='none'; s.style.opacity='1'; });
  }));
}

// ── SWIPE ────────────────────────────────────────────
function initSwipe() {
  let tx = 0;
  document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive:true });
  document.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 55) {
      const idx = PAGE_ORDER.indexOf(currentPage);
      if (dx < 0 && idx < PAGE_ORDER.length-1) goTo(PAGE_ORDER[idx+1]);
      else if (dx > 0 && idx > 0)              goTo(PAGE_ORDER[idx-1]);
    }
  }, { passive:true });
}

// ── CONTACT FORM ─────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.textContent = t('f_sending');
    btn.disabled = true;
    await new Promise(r => setTimeout(r, 1500));
    alert(t('f_success'));
    form.reset();
    btn.textContent = t('f_submit');
    btn.disabled = false;
  });
}

// ── FILTER BUTTONS ────────────────────────────────────
function initFilters() {
  document.getElementById('filterRow')?.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery(btn.dataset.f);
  });
}

// ── LOADER ───────────────────────────────────────────
function initLoader() {
  window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loader').classList.add('done'), 1200);
  });
}

// ── BOTTOM NAV ───────────────────────────────────────
function initBottomNav() {
  document.querySelectorAll('.bnav-btn').forEach(btn => {
    btn.addEventListener('click', () => goTo(btn.dataset.page));
  });
}

// ── LANG TOGGLE ──────────────────────────────────────
function initLangToggle() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLang(btn.dataset.lang));
  });
}

// ── EXPOSE goTo globally (used in HTML onclick) ───────
window.goTo = goTo;

// ── INIT ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTranslation();
  renderGallery('all');
  initParticles();
  initNavbar();
  initMobileMenu();
  initSwipe();
  initContactForm();
  initFilters();
  initBottomNav();
  initLangToggle();
  initLoader();
});
