// Animações e interações suaves
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para links internos (caso existam)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Adiciona lazy loading para todas as imagens
    const images = document.querySelectorAll('img');
    if ('loading' in HTMLImageElement.prototype) {
        images.forEach(img => {
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
        });
    }

    // Pequeno efeito de hover nos cards
    const cards = document.querySelectorAll('.qrcard, .doacao-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });

    console.log('ITPIA Web Help - Site carregado com sucesso!');
});