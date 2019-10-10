import {load} from '@shopify/theme-sections';
import '../sections/product';

// Use jquery-zoom for product image-zoom effects
require('jquery-zoom');

load('*');

// Below attaches jquery-zoom to the main image element, firing when the image
// loads. The full-size image URL is extracted from the active product image,
// and passed to jquery-zoom. It assumes the image has _300x appended to
// the src element.

$('.responsive-image__image').on('load', function() {
  const reg = /_300x/;
  let url = $('.product-image .responsive-image__wrapper:visible img')[0].src;
  url = url.replace(reg, '');
  $('.product-image .responsive-image__wrapper:visible').zoom({url});
});
