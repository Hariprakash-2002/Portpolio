lucide.createIcons();

function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    
    // Update Icon
    const icon = document.getElementById('theme-icon');
    icon.setAttribute('data-lucide', isDark ? 'moon' : 'sun');
    lucide.createIcons();
}

// Particle movement (Optional - adds small mouse interaction)
document.addEventListener('mousemove', (e) => {
    const bg = document.querySelector('.glow-bg');
    if(bg) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        bg.style.background = `radial-gradient(circle at ${x}% ${y}%, var(--glow), transparent)`;
    }
});
