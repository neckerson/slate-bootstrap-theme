import $ from 'jquery';
import 'bootstrap';

import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
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

// Apply a specific class to the html element for browser support of cookies.
if (window.navigator.cookieEnabled) {
  document.documentElement.className = document.documentElement.className.replace(
    'supports-no-cookies',
    'supports-cookies',
  );
}
