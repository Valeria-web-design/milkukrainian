document.addEventListener('DOMContentLoaded', () => {
  const slidersData = {
    'certificates-slider': [
      './src/img/certificate1.png',
      './src/img/certificate2.png',
    ],
    'command-slider': [
      './src/img/team1.png',
      './src/img/team2.png',
    ],
  };

  function initSlider(slider) {
    console.log(slider)
    const sliderClass = Array.from(slider.classList).find(cls => slidersData[cls]);
    console.log(sliderClass)
    if (!sliderClass) return;

    const slides = slidersData[sliderClass];
    const img = slider.querySelector(`.${sliderClass.slice(0, -7)}-slide-image`); 
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');

    let currentIndex = 0;

    function showSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      currentIndex = index;
      img.src = slides[currentIndex];
    }

    prevBtn.addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
      showSlide(currentIndex + 1);
    });

    showSlide(currentIndex);
  }

  document.querySelectorAll('.certificates-slider, .command-slider').forEach(initSlider);
});




document.addEventListener("DOMContentLoaded", () => {
  const sliderSection = document.querySelector(".info-slider");

  if (!sliderSection) return;

  const slides = [
    {
      heading: "Доставка",
      description:
        "Ми забезпечуємо надійну доставку нашої молочної продукції по всій Україні. Уся продукція транспортується в холодильному обладнанні, що гарантує збереження свіжості, смаку та якості. При замовленні на суму від 1000 грн — доставка безкоштовна. Стандартний термін доставки складає від 1 до 3 робочих днів залежно від вашого місцезнаходження."
    },
    {
      heading: "Оплата",
      description:
        "Оплатити замовлення можна зручно та безпечно, а саме готівкою при отриманні та банківською карткою через онлайн-сервіс. Усі електронні платежі надійно захищені відповідно до міжнародних стандартів фінансової безпеки. Після оформлення замовлення ви отримаєте підтвердження на електронну пошту або месенджер."
    },
    {
      heading: "Графік",
      description:
        "Наше підприємство працює з понеділка по суботу включно з 08:00 до 18:00. Онлайн-замовлення на сайті приймаються 24/7. Наші менеджери завжди готові проконсультувати вас у робочі години. Неділя – вихідний день, проте ви можете залишити замовлення, і ми його опрацюємо в перший робочий день. У святкові дні можливі зміни в графіку."
    }
  ];

  let currentSlide = 0;

  const headingEl = sliderSection.querySelector(".info-heading");
  const descEl = sliderSection.querySelector(".info-description");
  const prevBtn = sliderSection.querySelector(".prev");
  const nextBtn = sliderSection.querySelector(".next");

  function updateSlide(index) {
    headingEl.textContent = slides[index].heading;
    descEl.textContent = slides[index].description;
  }

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide(currentSlide);
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide(currentSlide);
  });

  updateSlide(currentSlide);
});
