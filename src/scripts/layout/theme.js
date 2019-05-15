import $ from 'jquery';
import 'bootstrap';

import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes';

import "../../styles/theme.scss";
import "../../styles/theme.scss.liquid";

// Set up jQuery so that it can be accessed from the HTML
window.jQuery = $;
window.$ = $;
