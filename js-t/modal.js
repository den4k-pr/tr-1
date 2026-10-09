document.addEventListener('DOMContentLoaded', () => {

 const programsData = [
    {
      image: './images-t2/swipe/card4.webp', // FIT PROGRAM — світлий сірий фон
      title: 'INSIDE FIT PROGRAM',
      subtitle: 'Full Body strength, tone, and mobility at home with completely new program!',
      lessons: '30 lessons',
      time: '15–20 min/day',
      category: 'Strength & endurance',
      forYou: 'You want a stronger body and mobility that holds under load',
      theme: 'light'
    },
    {
      image: './images-t2/swipe/card10.webp', // FRONTSPLIT (Longitudinal Split Course)
      title: 'INSIDE FRONT SPLIT',
      subtitle: 'Work step by step toward a safer, deeper front split.',
      lessons: '30 lessons',
      time: '16-25 min/day',
      category: 'Front split flexibility',
      forYou: 'You want to improve hamstrings, hip flexors, and lateral split depth',
      theme: 'dark'
    },
    {
      image: './images-t2/swipe/card11.webp', // MIDDLESPLIT (Middle Split Course)
      title: 'INSIDE MIDDLE SPLIT',
      subtitle: 'Develop the mobility and flexibility for your middle split',
      lessons: '30 lessons',
      time: '16-25 min/day',
      category: 'Middle split flexibility',
      forYou: 'You want to open your hips, inner thighs and get to the middle split range',
      theme: 'dark'
    },
    {
      image: './images-t2/swipe/card15.webp', // Upper Body Mobility — світлий бежевий фон
      title: 'INSIDE UPPER BODY MOBILITY',
      subtitle: 'Release neck, shoulders, and upper-back tension.',
      lessons: '30 lessons',
      time: '10–15 min/day',
      category: 'Posture & thoracic mobility',
      forYou: 'Tension keeps coming back, posture doesn’t hold',
      theme: 'light'
    },
    {
      image: './images-t2/swipe/card3.webp', // HANDSTAND MASTERY — чорно-жовтий фон
      title: 'INSIDE HANDSTAND MASTERY',
      subtitle: 'Build the strength, line, and balance for your handstand',
      lessons: '30 lessons',
      time: '20–25 min/day',
      category: 'Handstand strength & control',
      forYou: 'You want to go from wall work toward a cleaner freestanding handstand',
      theme: 'dark'
    },
    {
      image: './images-t2/swipe/card16.webp', // ONLY FLEXIBILITY — темний фон
      title: 'INSIDE ONLY FLEXIBILITY',
      subtitle: 'Build flexibility with short, guided daily sessions',
      lessons: '30 lessons',
      time: '7–15 min/day',
      category: 'Full-body flexibility',
      forYou: 'You want a simple daily flexibility routine without long workouts',
      theme: 'dark'
    },
    {
      image: './images-t2/swipe/card2.webp', // BEGINNERMOBILITY — темний фон
      title: 'INSIDE BEGINNER MOBILITY',
      subtitle: 'Start here if your body feels stiff, weak, or “not ready.”',
      lessons: '30 lessons',
      time: '15–20 min/day',
      category: 'Full-body mobility',
      forYou: 'You’re starting from zero and want a safe, simple foundation.',
      theme: 'dark'
    },
    {
      image: './images-t2/swipe/card6.webp', // BACK MOBILITY — низ темно-червоний, білий текст
      title: 'INSIDE BACK MOBILITY',
      subtitle: 'Move your spine more freely and reduce daily stiffness',
      lessons: '30 lessons',
      time: '10–15 min/day',
      category: 'Back health & posture',
      forYou: 'Your back feels tight, heavy, or tired from sitting and everyday life',
      theme: 'dark'
    },
    {
      image: './images-t2/swipe/card1.webp', // INHOMEPOWER Bikini Booty Plan — темно-червоний фон
      title: 'INSIDE INHOMEPOWER: BIKINI BODY',
      subtitle: 'A full-body shaping program for strength and tone at home',
      lessons: '30 lessons',
      time: '15–20 min/day',
      category: 'Body shaping & tone',
      forYou: 'You want a leaner, stronger, more toned body with a clear plan.',
      theme: 'dark'
    },
    {
      image: './images-t2/swipe/card5.webp', // POWERFIT CORE — червоний фон
      title: 'INSIDE POWERFIT 2.0 CORE',
      subtitle: 'Strengthen your core and improve body control.',
      lessons: '30 lessons',
      time: '10–15 min/day',
      category: 'Core strength & stability',
      forYou: 'You want a stronger waist, better posture, and more control in movement.',
      theme: 'dark'
    },
    {
      image: './images-t2/swipe/card7.webp', // INHOMEPOWER Project Glutes — насичений рожевий, білий текст
      title: 'INSIDE PROJECT GLUTES',
      subtitle: 'Focused lower-body training to build stronger glutes',
      lessons: '30 lessons',
      time: '15–20 min/day',
      category: 'Glutes & legs',
      forYou: 'You want targeted glute work and a stronger lower body at home.',
      theme: 'dark'
    },
    {
      image: './images-t2/swipe/card13.webp', // REACH YOUR FRONT SPLIT — білий фон
      title: 'INSIDE FRONT SPLIT 2.0',
      subtitle: 'Front Split program with new lessons tips, guidance and a more complete path to deeper flexibility.',
      lessons: '30 lessons',
      time: '20–25 min/day',
      category: 'Front split depth & control',
      forYou: 'You want to build a deeper, cleaner front split with better control',
      theme: 'light'
    },
    {
      image: './images-t2/swipe/card14.webp', // OPEN YOUR MIDDLE SPLIT — білий фон
      title: 'INSIDE MIDDLE SPLIT 2.0',
      subtitle: 'Middle Split program - with new lessons and more focused work for deeper range',
      lessons: '30 lessons',
      time: '20–25 min/day',
      category: 'Middle split depth & hip mobility',
      forYou: 'You want to progress beyond the original program and work toward a deeper middle split',
      theme: 'light'
    },
    {
      image: './images-t2/swipe/card12.webp', // BEGINNER MOBILITY (Full year access) — темний фон
      title: 'INSIDE BEGINNER MOBILITY 2.0',
      subtitle: 'Start here if your body feels stiff, weak, or “not ready.”',
      lessons: '30 lessons',
      time: '20 min/day',
      category: 'Full-body mobility',
      forYou: 'Upgraded Starter Program for your safe foundation',
      theme: 'dark'
    },
    {
      image: './images-t2/swipe/card9.webp', // POWERFITBODY — червоний фон
      title: 'INSIDE POWERFIT BODY',
      subtitle: 'Train your full body for strength, shape, and endurance.',
      lessons: '30 lessons',
      time: '15–20 min/day',
      category: 'Full-body strength',
      forYou: 'You want a stronger, more defined body with short effective workouts',
      theme: 'dark'
    },
    {
      image: './images-t2/swipe/card8.webp', // HIP MOBILITY — білий фон
      title: 'INSIDE HIP MOBILITY',
      subtitle: 'Open tight hips and improve the way your lower body moves.',
      lessons: '30 lessons',
      time: '10–15 min/day',
      category: 'Hip mobility & range',
      forYou: 'Your hips feel blocked, restricted, or stiff in daily movement',
      theme: 'light'
    }
  ];

  const swiperWrapper = document.getElementById('modalSwiperWrapper');

  // 2. Генерація HTML для кожного слайду
  programsData.forEach(program => {
    
    const isDark = program.theme === 'dark';
    
    // Клас для кольору тексту
    const textColorClass = isDark ? 'text-dark-theme' : 'text-light-theme';
    
    // Колір лінії та генерація SVG
    const strokeColor = isDark ? 'white' : 'black';
   const lineOpacity = isDark ? 0.2 : 0.4;
const svgLine = `<svg width="196" height="1" viewBox="0 0 196 1" fill="none" style="display:block;flex-shrink:0" xmlns="http://www.w3.org/2000/svg"><path opacity="${lineOpacity}" d="M0 0.5H196" stroke="${strokeColor}" shape-rendering="crispEdges"/></svg>`;
    // Вибір правильних іконок
    const iconPlay = isDark ? './images-t2/play-w.png' : './images-t2/play.png';
    const iconTime = isDark ? './images-t2/time-w.png' : './images-t2/time.png';
    const iconMan  = isDark ? './images-t2/man-w.png' : './images-t2/man.png';

    const slideHTML = `
      <div class="swiper-slide modal-slide">
        <div class="modal-card-inner">
          <img src="${program.image}" alt="${program.title}" class="modal-cover-img">
          
          <div class="modal-blur-bg"></div>
          <div class="modal-content-wrap ${textColorClass}">
            <div class="modal-back-header">
              <div class="modal-back-title">${program.title}</div>
              <div class="modal-back-subtitle">${program.subtitle}</div>
            </div>
            ${svgLine}
            <div class="modal-features">
              <div class="modal-feature">
                <div class="modal-f-icon-wrap"><img src="${iconPlay}" alt="Play" class="modal-f-icon"></div>
                <span>${program.lessons}</span>
              </div>
              <div class="modal-feature">
                <div class="modal-f-icon-wrap"><img src="${iconTime}" alt="Time" class="modal-f-icon"></div>
                <span>${program.time}</span>
              </div>
              <div class="modal-feature">
                <div class="modal-f-icon-wrap"><img src="${iconMan}" alt="Category" class="modal-f-icon"></div>
                <span>${program.category}</span>
              </div>
            </div>
            ${svgLine}
            <div class="modal-for-you">
              <strong>For you if:</strong><br>
              ${program.forYou}
            </div>
          </div>
        </div>
      </div>
    `;
    swiperWrapper.insertAdjacentHTML('beforeend', slideHTML);
  });

  // 3. Ініціалізація класичного Swiper
  const modalSwiper = new Swiper('.modal-swiper', {
    slidesPerView: 'auto', 
    centeredSlides: true,
    spaceBetween: -34, // Відступи для бокових слайдів
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: '.modal-btn-next',
      prevEl: '.modal-btn-prev',
    },
  });

  // 4. Логіка відкриття/закриття модалки
  const modalOverlay = document.getElementById('programsModal');
  const closeBtn = document.getElementById('closeModalBtn');
  
  const openTriggers = document.querySelectorAll('.s2-grid-wrapper');
  openTriggers.forEach(trigger => {
    trigger.style.cursor = 'pointer';
    trigger.addEventListener('click', (e) => {
      // Відкриваємо слайд саме того курсу, на картку якого натиснули
      const card = e.target.closest('[data-slide]');
      if (card) {
        modalSwiper.update();
        modalSwiper.slideToLoop(Number(card.dataset.slide), 0);
      }
      modalOverlay.classList.add('active');
    });
  });

  const closeModal = () => {
    modalOverlay.classList.remove('active');
  };

  closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
});