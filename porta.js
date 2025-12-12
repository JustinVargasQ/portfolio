gsap.registerPlugin(ScrollTrigger);

// 1. DICCIONARIO DE TRADUCCIONES
const translations = {
    es: {
        nav_profile: "Perfil",
        nav_skills: "Competencias",
        nav_projects: "Proyectos",
        nav_hire: "Contratar",
        hero_badge: "DISPONIBLE PARA PRÁCTICA PROFESIONAL",
        hero_title_1: "Ingeniería en",
        hero_title_2: "Tecnologías de Información",
        hero_desc: "Estudiante avanzado (Nivel 9) de la <strong>Universidad Técnica Nacional</strong>. Busco aplicar mis conocimientos en desarrollo de software, infraestructura y seguridad TI en un entorno profesional real.",
        btn_availability: "Ver Disponibilidad",
        hero_english: "Inglés (INA) Intermedio-Avanzado",
        card_contact: "Contacto",
        card_status: "Estado Académico",
        card_edu: "Educación:",
        card_level: "Nivel Actual:",
        card_goal: "Objetivo:",
        card_goal_val: "Práctica Profesional (Nivel 10)",
        click_prompt: '<i class="ri-arrow-up-down-line"></i> Haz click en la imagen para ver mi info.',
        skills_subtitle: "PLAN DE ESTUDIOS UTN",
        skills_title: "Arsenal Técnico",
        skills_desc: "Competencias adquiridas durante el Bachillerato y Diplomado en ITI.",
        skill_web: "Desarrollo Web",
        skill_logic: "Lógica & Algoritmos",
        skill_db: "Gestión de BD",
        skill_mobile: "Desarrollo Móvil",
        skill_infra: "Redes & Infraestructura",
        skill_security: "Ciberseguridad",
        proj_subtitle: "FORMACIÓN ACADÉMICA",
        proj_title: "Proyectos Integradores",
        proj_desc: "Aplicación práctica de los conocimientos en los niveles clave de la carrera.",
        tag_diploma_5: "NIVEL 5 • DIPLOMADO",
        p1_title: "Desarrollo de Software I",
        p1_desc: "Implementación de una solución web completa integrando frontend y backend, aplicando ingeniería de requerimientos y conexión a bases de datos relacionales.",
        tag_diploma_6: "NIVEL 6 • DIPLOMADO",
        p2_title: "Infraestructura de TI",
        p2_desc: "Diseño e implementación de una red empresarial escalable, incluyendo configuración de servidores, virtualización y enrutamiento seguro.",
        tag_bach_8: "NIVEL 8 • BACHILLERATO",
        p3_title: "Desarrollo de Software II",
        p3_desc: "Desarrollo avanzado utilizando metodologías ágiles. Integración de aplicaciones móviles, bases de datos avanzadas y principios de seguridad.",
        footer_title: "¿Listo para trabajar?",
        footer_desc: "Actualmente cursando el final del Nivel 9. Estoy listo para iniciar mi <strong>Práctica Profesional (Nivel 10)</strong> en el próximo ciclo.",
        btn_cv: "Solicitar CV",
        footer_copy: "Diseñado por Justin Vargas Quirós • Estudiante UTN • 2025",

        // TRADUCCIONES NUEVAS PARA BOTONES
        btn_demo: "Ver Demo",
        btn_code: "Ver Código"
    },
    en: {
        nav_profile: "Profile",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_hire: "Hire Me",
        hero_badge: "AVAILABLE FOR INTERNSHIP",
        hero_title_1: "Engineering in",
        hero_title_2: "Information Technologies",
        hero_desc: "Advanced student (Level 9) at <strong>Universidad Técnica Nacional</strong>. I am looking to apply my knowledge in software development, infrastructure, and IT security in a real professional environment.",
        btn_availability: "Check Availability",
        hero_english: "English (INA) Intermediate-Advanced",
        card_contact: "Contact",
        card_status: "Academic Status",
        card_edu: "Education:",
        card_level: "Current Level:",
        card_goal: "Goal:",
        card_goal_val: "Professional Practice (Level 10)",
        click_prompt: '<i class="ri-arrow-up-down-line"></i> Click the image to see my info.',
        skills_subtitle: "UTN CURRICULUM",
        skills_title: "Technical Arsenal",
        skills_desc: "Competencies acquired during the ITI Bachelor's and Associate's degree.",
        skill_web: "Web Development",
        skill_logic: "Logic & Algorithms",
        skill_db: "DB Management",
        skill_mobile: "Mobile Development",
        skill_infra: "Networks & Infrastructure",
        skill_security: "Cybersecurity",
        proj_subtitle: "ACADEMIC BACKGROUND",
        proj_title: "Integrative Projects",
        proj_desc: "Practical application of knowledge at key levels of the career.",
        tag_diploma_5: "LEVEL 5 • ASSOCIATE",
        p1_title: "Software Development I",
        p1_desc: "Implementation of a complete web solution integrating frontend and backend, applying requirements engineering and connection to relational databases.",
        tag_diploma_6: "LEVEL 6 • ASSOCIATE",
        p2_title: "IT Infrastructure",
        p2_desc: "Design and implementation of a scalable enterprise network, including server configuration, virtualization, and secure routing.",
        tag_bach_8: "LEVEL 8 • BACHELOR",
        p3_title: "Software Development II",
        p3_desc: "Advanced development using agile methodologies. Integration of mobile applications, advanced databases, and security principles.",
        footer_title: "Ready to work?",
        footer_desc: "Currently finishing Level 9. I am ready to start my <strong>Professional Practice (Level 10)</strong> in the next cycle.",
        btn_cv: "Request CV",
        footer_copy: "Designed by Justin Vargas Quirós • UTN Student • 2025",

        // TRADUCCIONES NUEVAS PARA BOTONES
        btn_demo: "Live Demo",
        btn_code: "View Code"
    }
};

// 2. Lógica de Cambio de Idioma (Switch Deslizante)
let currentLang = 'es';
const langToggle = document.getElementById('lang-toggle');
const langOptions = document.querySelectorAll('.lang-option');

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';

    // Animación del slider
    langToggle.classList.toggle('english-active');

    // Actualizar color de texto activo
    langOptions.forEach(opt => {
        if (opt.dataset.lang === currentLang) {
            opt.classList.add('active');
        } else {
            opt.classList.remove('active');
        }
    });

    updateContent();
});

function updateContent() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
    document.documentElement.lang = currentLang;
}

// 3. Lógica de Tema Claro/Oscuro
const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        themeIcon.classList.remove('ri-sun-line');
        themeIcon.classList.add('ri-moon-line');
    } else {
        themeIcon.classList.remove('ri-moon-line');
        themeIcon.classList.add('ri-sun-line');
    }
});


// --- GSAP & Scroll (Lógica Original) ---
const lenis = new Lenis({ duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

gsap.to(".scroll-progress-bar", {
    width: "100%", ease: "none",
    scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 0.3 }
});

const revealElements = document.querySelectorAll(".reveal-element");
revealElements.forEach((element) => {
    gsap.to(element, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 85%", toggleActions: "play none none reverse" }
    });
});

gsap.from(".tech-card", {
    scrollTrigger: { trigger: ".tech-grid", start: "top 85%" },
    y: 40, opacity: 0, duration: 0.6, stagger: 0.05, ease: "back.out(1.2)"
});

const profileCard = document.querySelector('.profile-card');
const profileCardContainer = document.querySelector('.profile-card-container');
profileCardContainer.addEventListener('click', () => {
    profileCard.classList.toggle('is-flipped');
});

const cards = document.querySelectorAll('.glass-card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        gsap.to(card, { duration: 0.5, rotateX: rotateX, rotateY: rotateY, scale: 1.02, ease: "power2.out", transformPerspective: 1000, transformOrigin: "center" });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { duration: 0.8, rotateX: 0, rotateY: 0, scale: 1, ease: "elastic.out(1, 0.5)" });
    });
});

gsap.utils.toArray(".parallax-item").forEach(card => {
    const speed = card.dataset.speed || 1;
    gsap.to(card, { y: -30 * speed, ease: "none", scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true } });
});