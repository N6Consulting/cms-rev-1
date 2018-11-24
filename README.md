# N6 Consulting website content

Originally derived from [Netlify
CMS](https://github.com/netlify/netlify-cms) "Kaldi" template.

Site is built with [Victor
Hugo](https://github.com/netlify/victor-hugo)


## About the Forms

### Contact Us

Submitted via Netlify.

Emails to michael.nygard@n6consulting.com

### Mailing list

Connected to Zapier, then to MailChimp. List is "N6Consulting Mailing List"


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

## TODO

### Update deprecated NPM packages

```
npm WARN deprecated gulp-util@3.0.8: gulp-util is deprecated - replace it, following the guidelines at https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5
npm WARN deprecated browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
npm WARN deprecated graceful-fs@3.0.11: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN deprecated node-uuid@1.4.8: Use uuid module instead
npm WARN deprecated tough-cookie@2.2.2: ReDoS vulnerability parsing Set-Cookie https://nodesecurity.io/advisories/130
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated cryptiles@2.0.5: This version is no longer maintained. Please upgrade to the latest version.
npm WARN deprecated boom@2.10.1: This version is no longer maintained. Please upgrade to the latest version.
npm WARN deprecated hoek@2.16.3: This version is no longer maintained. Please upgrade to the latest version.
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@1.2.3: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
```