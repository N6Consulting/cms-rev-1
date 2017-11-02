# N6 Consulting website content

Originally derived from [Netlify
CMS](https://github.com/netlify/netlify-cms) "Kaldi" template.

Site is built with [Victor
Hugo](https://github.com/netlify/victor-hugo)

## Getting started

## Local Development

Clone this repository, and run `yarn` or `npm install` from the new
folder to install all required dependencies.

Then start the development server with `yarn start` or `npm start`.

## Deployment

Push to github.

Master gets deployed straight to production.

A branch gets built as a staging site on
https://app.netlify.com/sites/timber-grader-salvage-83075/overview

## Layouts

The template is based on small, content-agnostic partials that can be
mixed and matched. The pre-built pages showcase just a few of the
possible combinations. Refer to the `site/layouts/partials` folder for
all available partials.

Use Hugo’s `dict` functionality to feed content into partials and
avoid repeating yourself and creating discrepancies.

## CSS

The template uses a custom fork of Tachyons and PostCSS with cssnext
and cssnano. To customize the template for your brand, refer to
`src/css/imports/_variables.css` where most of the important global
variables like colors and spacing are stored.

## SVG

All SVG icons stored in `site/static/img/icons` are automatically
optimized with SVGO (gulp-svgmin) and concatenated into a single SVG
sprite stored as a a partial called `svg.html`. Make sure you use
consistent icons in terms of viewport and art direction for optimal
results. Refer to an SVG via the `<use>` tag like so:

```
<svg width="16px" height="16px" class="db">
  <use xlink:href="#SVG-ID"></use>
</svg>
```
