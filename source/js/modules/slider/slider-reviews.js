const sliderReviews = document.querySelector('[data-slider="reviews"]');
const buttonPrev = document.querySelector('[data-button="reviews-prev"]');
const buttonNext = document.querySelector('[data-button="reviews-next"]');

const initSliderReviews = () => {
  if (sliderReviews) {
    // eslint-disable-next-line
    new Swiper(sliderReviews, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      slidesPerView: 1,
      spaceBetween: 30,
    });
  }
};

export {initSliderReviews};
