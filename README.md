# Ttree Neos Website BasePackage

This project is currently a work in progress to define best practice when starting a new site package with [TYPO3 Neos](http://neos.typo3.org/). 

This is the [ttree](http://ttree.ch) base package for Neos Site Package.

## What's include ?

  * Saas Mixin Library [Bourbon.io](http://bourbon.io/) + [Bitters](http://bitters.bourbon.io/)
  * Semantic Grid Framework [Neat](http://neat.bourbon.io/)
  * Documentation System for Style Guides [Hologram](http://trulia.github.io/hologram/) + [Cortana](https://github.com/Yago/Cortana) Theme
  * Default Page Template [HTML5 ★ BOILERPLATE](http://html5boilerplate.com/)
  * Package Manager [Bower](http://bower.io/)
  * JS Task Runner [Grunt](http://gruntjs.com/)

## Quickstart

  * Run `bundle install`
  * Run `bower install`
  
Then when you're working on your project, just run the following command:

```bash
grunt work
```

## Grunt Tasks

### grunt work

A concurrent that watch for change in your JS, SCSS and use jhint to validate JS code, SCSS/Compass to build 
your CSS and Hologram to update your Web Style Guide.

### grunt build

Prepare all files (CSS, JS, Minified version, ...) before releasing a new version of the site package. 

## Upgrading

If you'd like to upgrade to a newer version of Foundation down the road just run:

```bash
bundle update
bower update
```
