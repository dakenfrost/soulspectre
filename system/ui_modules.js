/* --- GLOBAL UI LOGIC (Carousel & Lightbox) --- */
document.addEventListener('DOMContentLoaded', () => {
    // Carousel
    const track = document.getElementById('car-track');
    const prevBtn = document.getElementById('car-prev');
    const nextBtn = document.getElementById('car-next');
    if (track && prevBtn && nextBtn) {
        const items = Array.from(track.children);
        let currentIndex = 0;
        const updateCarousel = (index) => {
            const itemWidth = items[0].getBoundingClientRect().width;
            track.style.transform = `translateX(-${(itemWidth + 15) * index}px)`;
            currentIndex = index;
        };
        nextBtn.addEventListener('click', () => {
            if (currentIndex < items.length - 1) updateCarousel(currentIndex + 1);
            else updateCarousel(0);
        });
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) updateCarousel(currentIndex - 1);
            else updateCarousel(items.length - 1);
        });
    }

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
    const zoomables = document.querySelectorAll('.zoomable');
    if (lightbox && lightboxImg) {
        zoomables.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
            });
        });
        closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
        lightbox.addEventListener('click', (e) => { if (e.target !== lightboxImg) lightbox.classList.remove('active'); });
    }
});
