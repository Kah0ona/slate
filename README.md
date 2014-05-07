Slate
=====

Slate is a framework for Wordpress child theme development.

### 1. Dependencies

The following dependencies need to be installed on your system before deploying the framework.

* Node.js: [http://nodejs.org/](http://nodejs.org/)
* Ruby: [https://www.ruby-lang.org/en/](https://www.ruby-lang.org/en/)
* Git: [http://git-scm.com/](http://git-scm.com/)
* Sass: [http://sass-lang.com/](http://sass-lang.com/)
* Grunt Cli: [http://gruntjs.com/](http://gruntjs.com/)
* Bower: [http://bower.io/](http://bower.io/)
* A local Wordpress install is optional

### 2. Getting Started

#####Git

* Clone [Slate](https://github.com/Kah0ona/slate) to your local working directory
* Create a new repository for your project

#####Ftp

* Copy an .ftppass file to the root of your local project folder

#####Setup

* Run `npm install`
* Run `grunt init`

#####Wordpress

* `Network enable` your parent theme (if not enabled already)
* Create a new wordpress site
* `Network enable` your child theme
* Apply the child theme to the new wordpress site

### 3. Styleguide & best practices

* HTML version: [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list)
* HTML svg: [use svg for vector based images](http://css-tricks.com/using-svg/) and [icons](http://css-tricks.com/svg-sprites-use-better-icon-fonts/)
* CSS and HTML structure: [MVCSS](http://mvcss.github.io/) for structure and [Suitcss](https://github.com/suitcss) by [Nicolas Gallagher](https://github.com/necolas/idiomatic-css) for [naming](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) [classes](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
* CSS box-sizing: [box-sizing:border-box](http://www.paulirish.com/2012/box-sizing-border-box-ftw/)
* CSS sizing: [everything in rem](http://mvcss.github.io/core/helpers/)
* CSS media queries: [media queries in em](http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/)
* CSS images: [fluid images](http://alistapart.com/article/fluid-images)
* CSS margins: [declare only in one direction](http://csswizardry.com/2012/06/single-direction-margin-declarations/)
* Sass color variable naming: [Ben Smithetts approach](http://bensmithett.com/stop-using-so-many-sass-variables/)

### 4. Checklist

* Replace modernizr.js with a built and minified version, or remove it when you're not using it (don't forget to remove the link from header.php as well). Consider adding [html5shiv.js](https://code.google.com/p/html5shiv/) and removing the .no-js class from the html element if you're not using modernizr.
* Load (only) the fonts you're using
