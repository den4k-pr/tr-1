
    document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
            threshold: 0.6 // Анімація спрацює, коли 60% картки буде видно
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Додаємо затримку, щоб воно виглядало природньо
                    setTimeout(() => {
                        entry.target.classList.add('is-active');
                    }, 200);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.s2-element');
        elements.forEach(el => observer.observe(el));
    });
