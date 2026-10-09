document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.s12');
    if (!footer) return;

    const scrollThreshold = 500;
    const bottomThreshold = 200; // відстань до низу екрана в пікселях

    // =========================
    // SCROLL LOGIC
    // =========================
    function checkScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Рахуємо, скільки пікселів залишилося до кінця сторінки
        const distanceToBottom = documentHeight - (scrollTop + windowHeight);

        // Показуємо тільки якщо прокрутили > 500px ТА до низу залишилося > 200px
        if (scrollTop > scrollThreshold && distanceToBottom > bottomThreshold) {
            footer.classList.add('is-visible');
        } else {
            footer.classList.remove('is-visible');
        }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true }); // додано на випадок зміни розміру вікна
    checkScroll();

    // =========================
    // 24H TIMER LOGIC
    // =========================
    const STORAGE_KEY = 's12_timer_end';

    const timerEls = footer.querySelectorAll('.s12-timer-item');

    function getEndTime() {
        let end = localStorage.getItem(STORAGE_KEY);

        if (!end) {
            end = Date.now() + 30 * 60 * 1000;
            localStorage.setItem(STORAGE_KEY, end);
        }

        return parseInt(end, 10);
    }

    function resetTimer() {
        const newEnd = Date.now() + 30 * 60 * 1000;
        localStorage.setItem(STORAGE_KEY, newEnd);
        return newEnd;
    }

    let endTime = getEndTime();

    function format(timeLeft) {
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        return [
            String(hours).padStart(2, '0'),
            String(minutes).padStart(2, '0'),
            String(seconds).padStart(2, '0')
        ];
    }

    function updateTimer() {
        let now = Date.now();
        let diff = endTime - now;

        // якщо дійшло до 0 → скидаємо назад
        if (diff <= 0) {
            endTime = resetTimer();
            diff = endTime - Date.now();
        }

        const [h, m, s] = format(diff);

        if (timerEls.length >= 3) {
            timerEls[0].textContent = h;
            timerEls[1].textContent = m;
            timerEls[2].textContent = s;
        }
    }

    updateTimer();
    setInterval(updateTimer, 1000);
});