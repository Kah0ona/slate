Slate
=====

Slate is a framework for Wordpress child theme development.

1. Dependencies
---------------

The following dependencies need to be installed on your system before deploying the framework.

* Node.js: [http://nodejs.org/](http://nodejs.org/)
* Ruby: [https://www.ruby-lang.org/en/](https://www.ruby-lang.org/en/), on windows use: [http://rubyinstaller.org/](http://rubyinstaller.org/)
* Git: [http://git-scm.com/](http://git-scm.com/)
* Sass: [http://sass-lang.com/](http://sass-lang.com/)
* Grunt Cli: [http://gruntjs.com/](http://gruntjs.com/)
* Bower: [http://bower.io/](http://bower.io/)
* A local Wordpress install is optional

Note: On Windows, one might want to use Console2 instead of the normal cmd prompt.

2. Getting Started
------------------

#####Git

* Clone [Slate](https://github.com/Kah0ona/slate) to your local working directory
* Create a new repository for your project

#####Ftp

* Copy an .ftppass file to the root of your local project folder

#####Setup

* Run `npm install`
* Run `grunt init`

#####Wordpress

* Create a new wordpress site
* `Network enable` your parent theme (if not enabled already)
* `Network enable` your child theme
* Apply the child theme to the new wordpress site (the theme will be called `slate-[current version]_[project name]`)

#####Optional

* Create a new sublime project and add the snippets and settings from `util/sublime` to your project

3. Documentation
----------------

#####Styleguides

* CSS and HTML structure: [MVCSS](http://mvcss.github.io/) for structure and [Suitcss](https://github.com/suitcss) by [Nicolas Gallagher](https://github.com/necolas/idiomatic-css) for [naming](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) [classes](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
* Sass color variable naming: [Ben Smithetts approach](http://bensmithett.com/stop-using-so-many-sass-variables/)
* In general: [Google web fundamentals](https://developers.google.com/web/fundamentals/)

#####Best practices

* [Declare css margins in one direction only](http://csswizardry.com/2012/06/single-direction-margin-declarations/)
* [Use svg for vector based images](http://css-tricks.com/using-svg/) and [icons](http://css-tricks.com/svg-sprites-use-better-icon-fonts/)
* [Use box-sizing:border-box on all elements](http://www.paulirish.com/2012/box-sizing-border-box-ftw/)
* [Do your css sizing in rem]()
* [Css media queries in em](http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/)
* [All images should be fluid images](http://alistapart.com/article/fluid-images)

#####Used technology, libraries, languages

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list)
* [HTML5 Boilerplate](http://html5boilerplate.com/)
* [Bourbon and Bourbon Neat](http://bourbon.io/)
* [Normalize.css](https://necolas.github.io/normalize.css/)
* [Modernizr](http://modernizr.com/)

4. Checklist
------------

#####Code

- [ ] Replace modernizr.js with a built and minified version, or remove it when you're not using it (don't forget to remove the link from header.php as well). Consider adding [html5shiv.js](https://code.google.com/p/html5shiv/) and removing the .no-js class from the html element if you're not using modernizr
- [ ] Remove the livereload script from footer.php
- [ ] Load (only) the fonts you're using (check the domain if you're using [typekit](http://www.typekit.com))
- [ ] Add a google analytics snippet
- [ ] Map the domain to name.lokaalgevonden.nl (under `Settings -> Domains`)

#####Structure

- [ ] Create a contact page with a contactform and test it
- [ ] Add a map to the contact page (google maps: [here](https://www.google.com/maps?output=classic))
- [ ] Generate the favicons, and app icons
- [ ] Create a footer menu, call the menu 'footermenu' to make the dropdown script work.
- [ ] Add the customers' contact details to the footer
- [ ] Create an app page
- [ ] Add 'Website en SEO door LokaalGevonden' in footer.php. NB: Use 'Webshop' if it is a webshop!
- [ ] Make the logo link to the home page (add a <a href="/"> tag)
- [ ] For sites that use typekit fonts, check if the domain is set in the Kit Settings
- [ ] Add the user 'tamara', to the wordpress, select 'Administrator', and check 'don't send email'


#####Final checks

- [ ] Check the website in all screensizes and on the relevant browsers (with [browserstack.com](http://www.browserstack.com/))
- [ ] Go through all the pages, check the links, effects and content
- [ ] Call/mail the accountmanager to notify him about the website, and ask if he spots any bugs.
- [ ] Call the customer and ask them if they're satisfied
- [ ] Add the live domain (through `settings` -> `domains` )


4. Developing slate tips & tricks
----------------------------------

`grunt bump:{patch|minor|major}` updates the version number of slate and lets it depend on another parent theme. Also tags a git commit, showing it with releases in github. The plugin can be found on https://github.com/vojtajina/grunt-bump. NB: ONLY RUN BUMP FROM THE PARENT REPO, NOT FROM A CHILD
- `grunt --help` for help and a list of tasks that are available. Note especially: develop, deploy, init, build
- `npm outdated` to check which packages are outdated in package.json file.
- When adding js scripts, update footer.php for the development mode.

