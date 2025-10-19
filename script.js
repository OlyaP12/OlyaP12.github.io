document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('.fill');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.dataset.width;
                bar.style.width = width;
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    bars.forEach(bar => {
        bar.style.width = '0';
        if (bar.classList.contains('full')) bar.dataset.width = '100%';
        else if (bar.classList.contains('eighty')) bar.dataset.width = '80%';
        else if (bar.classList.contains('forty')) bar.dataset.width = '40%';
        else if (bar.classList.contains('twenty')) bar.dataset.width = '20%';

        observer.observe(bar);
    });

    document.body.classList.add('centered');
});

const skillTags = document.querySelectorAll('.skills .tags span');

function showSkills() {
    const triggerBottom = window.innerHeight * 0.9;

    skillTags.forEach((tag) => {
        const tagTop = tag.getBoundingClientRect().top;
        if (tagTop < triggerBottom && !tag.classList.contains('visible')) {
            setTimeout(() => {
                tag.classList.add('visible');
            }, Math.random() * 1200);
        }
    });
}

window.addEventListener('scroll', showSkills);
window.addEventListener('load', showSkills);

const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const expandBtn = document.getElementById('expand-btn');
const mainContent = document.querySelector('.main');
const menu = document.querySelector('.menu');

expandBtn.addEventListener('click', () => {
    mainContent.classList.toggle('hidden');
    menu.classList.toggle('hidden');

    if (mainContent.classList.contains('hidden')) {
        expandBtn.textContent = 'Show full CV ↓';
        document.body.classList.add('centered');
        document.body.classList.remove('shifted');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        expandBtn.textContent = 'Hide CV ↑';
        document.body.classList.remove('centered');
        document.body.classList.add('shifted');
        mainContent.scrollIntoView({ behavior: 'smooth' });
    }
});

const toggleButtons = document.querySelectorAll('.toggle-details');

toggleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.event-card');
        card.classList.toggle('expanded');
    });
});

const modeToggle = document.getElementById('mode-toggle');

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        modeToggle.textContent = '☀️ Light Mode';
    } else {
        modeToggle.textContent = '🌙 Dark Mode';
    }
});
