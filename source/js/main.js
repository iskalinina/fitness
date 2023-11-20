import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initTabs} from './modules/tabs/init-tabs';
import {initAccordions} from './modules/accordion/init-accordion';
import {initSliderJury} from './modules/slider/slider-jury';
import {initSliderReviews} from './modules/slider/slider-reviews';
import {setupVideo} from './modules/video/init-video';

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();

  initTabs();
  initAccordions();
  initSliderJury();
  initSliderReviews();
  setupVideo();

  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});
