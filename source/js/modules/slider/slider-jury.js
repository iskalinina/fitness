const sliderJury = document.querySelector('[data-slider="jury"]');
const buttonNext = document.querySelector('[data-button="jury-next"]');
const buttonPrev = document.querySelector('[data-button="jury-prev"]');

const initSliderJury = () => {
  if (sliderJury) {
    // eslint-disable-next-line
    new Swiper(sliderJury, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      loop: true,

      breakpoints: {
        1366: {
          initialSlide: 0,
          slidesPerView: 4,
          spaceBetween: 40,
        },

        768: {
          initialSlide: 2,
          slidesPerView: 2,
          spaceBetween: 32,
        },

        320: {
          initialSlide: 2,
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
};

export {initSliderJury};
