# Slate-Bootstrap Theme

> **[Slate v1](https://github.com/Shopify/slate) is currently in beta!** You should expect potentially breaking changes between updates and more bugs than a finalized release. Slate v1.0 has not yet been tested on Windows.

This is the starter theme I wish had been available when I was rolling my own integration of Bootstrap 4 into a custom Shopify theme.

I've started with the base [Shopify/skeleton-theme](https://github.com/Shopify/starter-theme) and brought over most of the ```/src``` directory of [Shopify/starter-theme](https://github.com/Shopify/skeleton-theme), with the exception of ```src/styles```. If you find yourself overriding many of the default Bootstrap styles, take a look at the Starter Theme ```/styles``` directory structure and ```theme.scss``` to see how Shopify implements SCSS.

For responsive image loading, use the ```responsive-image``` & ```responsive-bg-image``` snippets. They pair well with Bootstrap's responsive classes, and the lazyloader dependancy is built into the theme.

### jQuery & Webpack
Because Bootstrap requires jQuery, some additional setup is required in ```theme.js```. For discussion of this issue, see issue [#4258](https://github.com/webpack/webpack/issues/42580). To add plugins to the site, such as [jackmoore/zoom](https://github.com/jackmoore/zoom) for product images, take a look at [this gist](https://gist.github.com/neckerson/fd24e76e5c3f38d5aef83baadd09d28b) which is already implemented in ```theme.js```.

## System requirements

You'll want to ensure you have the following already installed on your local machine before getting started with the Slate-Bootstrap theme:

* **Node:** The current LTS (long-term support) release. We like to use a Node Version Manager like [NVM](https://github.com/creationix/nvm).

* **NPM 5+ or Yarn:** Both of these package managers have [ups and downs](https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/), choose whichever you prefer. Follow the installation instructions [for Yarn](https://yarnpkg.com/en/docs/install) or [NPM](https://www.npmjs.com/get-npm) to make sure you're using the latest version.

## Getting started

To get started with the Slate-Bootstrap theme, run the following command in your terminal:

```
$ yarn create slate-theme my-new-theme neckerson/slate-bootstrap
```

For more information on connecting your new project with a Shopify store, see the [Slate docs](https://github.com/Shopify/slate/wiki/3.-Connect-to-your-store).

## Contributing

For help on setting up the repository locally, building, testing, and contributing
please see [CONTRIBUTING.md](https://github.com/neckerson/slate-bootstrap/blob/master/CONTRIBUTING.md).

## Code of Conduct

All developers who wish to contribute through code or issues, take a look at the
[Code of Conduct](https://github.com/neckerson/slate-bootstrap/blob/master/CODE_OF_CONDUCT.md).

## License

This theme is derived from the Shopify Skeleton theme, which is Copyright © 2018 Shopify. See [LICENSE](https://github.com/Shopify/skeleton-theme/blob/master/LICENSE) for further details.
