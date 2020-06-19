# Slate-Bootstrap Theme

> **[Depreciation Notice](https://shopify.github.io/slate/docs/about)**. As of Jan 2020, the Slate development environment has been depreciated by the Shopify team. While it may be possible to compile the theme today, I will no longer be maintaining this project. For the compiled theme which can be managed with Theme Kit, [see this repository](https://github.com/neckerson/shopify-bootstrap-theme).

This is the theme I wish had been available when I was rolling my own integration of Bootstrap 4 into a custom Shopify store.

[Theme Preview](https://slate-bootstrap-theme.myshopify.com)

I've started with the base [Shopify/skeleton-theme](https://github.com/Shopify/starter-theme) and brought over most of the ```/src``` directory of [Shopify/starter-theme](https://github.com/Shopify/skeleton-theme), and some of ```src/styles```. These default Shopify styles are being gradually refactored out of the theme as I have time. PRs welcome!

For responsive image loading, use the ```responsive-image``` & ```responsive-bg-image``` snippets. They pair well with Bootstrap's responsive classes, and the lazyloader dependancy is built into the theme.

### Theming

Body background and text color can be set via the Shopify theme editor panels, but other changes should be made with Bootstrap's built-in Sass variables, allowing global style preferences, easy theming and component changes.

In ```src/styles/variables.scss``` you will find examples of customization already done, with the primary and secondary colors changed to different Bootstrap 4 color variables. You could experiment with other changes, such as adding ```$enable-rounded: false;``` to variables.scss and deploying the theme. For more examples, see the Bootstrap 4 [theming documentation](https://getbootstrap.com/docs/4.0/getting-started/theming/).

### Typography

This theme is intended to be used with Montserrat Bold for headings and Harmonica Sans for body text. Both of these can be set using the Shopify admin theme editor. You may need to make adjustments in typography.scss if other font pairings are used.

### jQuery & Webpack
Because Bootstrap requires jQuery, additional setup is required in ```theme.js```. For discussion, see Webpack issue [#4258](https://github.com/webpack/webpack/issues/4258).

To add plugins to the theme, such as [jackmoore/zoom](https://github.com/jackmoore/zoom), take a look at [this gist](https://gist.github.com/neckerson/fd24e76e5c3f38d5aef83baadd09d28b) which is implemented in ```theme.js```. Image zoom is implemented in sections/product.liquid.

## System requirements

You'll want to ensure you have the following already installed on your local machine before getting started with the Slate-Bootstrap theme:

* **Node:** The current LTS (long-term support) release. We like to use a Node Version Manager like [NVM](https://github.com/creationix/nvm).

* **NPM 5+ or Yarn:** Both of these package managers have [ups and downs](https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/), choose whichever you prefer. Follow the installation instructions [for Yarn](https://yarnpkg.com/en/docs/install) or [NPM](https://www.npmjs.com/get-npm) to make sure you're using the latest version.

## Getting started

To get started with the Slate-Bootstrap theme, run the following command in your terminal:

```
$ yarn create slate-theme my-new-theme neckerson/slate-bootstrap-theme
```

For more information on connecting your new project with a Shopify store, see the [Slate docs](https://github.com/Shopify/slate/wiki/3.-Connect-to-your-store).

### Troubleshooting

If you cannot see the Bootstrap styles being applied after running `yarn start`, open the browser console and check for `ERR_CERT_AUTHORITY_INVALID` errors. You will need to generate a [local SSL certificate](https://github.com/Shopify/slate/wiki/4.-Create-a-self-signed-SSL-certificate) before the theme assets can be served.

## Contributing

For help on setting up the repository locally, building, testing, and contributing
please see [CONTRIBUTING.md](https://github.com/neckerson/slate-bootstrap/blob/master/CONTRIBUTING.md).

## Code of Conduct

All developers who wish to contribute through code or issues, take a look at the
[Code of Conduct](https://github.com/neckerson/slate-bootstrap/blob/master/CODE_OF_CONDUCT.md).

## License

This theme is derived from the Shopify Skeleton theme, which is Copyright © 2018 Shopify. See [LICENSE](https://github.com/Shopify/skeleton-theme/blob/master/LICENSE) for further details.
