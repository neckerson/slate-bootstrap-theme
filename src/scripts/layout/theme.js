import $ from 'jquery';
import 'bootstrap';

import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import '../vendor/lazysizes/plugins/ls.bgset';
import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes';

import {focusHash, bindInPageLinks} from '@shopify/theme-a11y';

import "../../styles/theme.scss";
import "../../styles/theme.scss.liquid";

// Common a11y fixes
focusHash();
bindInPageLinks();

// Set up jQuery so that it can be accessed from the HTML
window.jQuery = $;
window.$ = $;

// Use jquery-zoom for product image-zoom effects
require('jquery-zoom');

// cookiesEnabled was removed from the latest version of theme-scripts cart.js
// https://github.com/Shopify/starter-theme/issues/112
if (window.navigator.cookieEnabled) {
  document.documentElement.className = document.documentElement.className.replace(
    'supports-no-cookies',
    'supports-cookies',
  );
}
