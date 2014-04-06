Slate
=====

A basic wordpress framework/boilerplate.

**Dependencies**

* Node.js: [http://nodejs.org/](http://nodejs.org/)
* Ruby: [https://www.ruby-lang.org/en/](https://www.ruby-lang.org/en/)
* Sass: [http://sass-lang.com/](http://sass-lang.com/)
* Grunt Cli: [http://gruntjs.com/](http://gruntjs.com/)
* Bower: [http://bower.io/](http://bower.io/)

**Bundled dependencies**

* Normalize.css: [http://necolas.github.io/normalize.css/](http://necolas.github.io/normalize.css/)
* Bourbon: [http://bourbon.io/](http://bourbon.io/)
* Bourbon Neat: [http://neat.bourbon.io/](http://neat.bourbon.io/)
* Jquery: [http://jquery.com/](http://jquery.com/)
* Modernizr: [http://modernizr.com/](http://modernizr.com/)

**Getting Started**

* Clone the repo to your local working directory
* Open that directory in terminal/cmd and run `npm install`
* After that run `bower install`
* Run `grunt deploy`
* Run `grunt`
* Change css/style.css and the working dir in Gruntfile.js to reflect your current theme

**Deploy**

* Replace modernizr.js with a built and minified version, or remove it when you're not using it (don't forget to remove the link from header.php as well). Consider adding html5shiv.js and removing the .no-js class from the html element if you're not using modernizr.
* Load (only) the fonts you're using

**Suggestions**

* Use [respond.js](https://github.com/scottjehl/Respond) for IE8 media query functionality

**Documentation**

* Check /docs
* MVCSS: [http://mvcss.github.io/](http://mvcss.github.io/)
* SMACSS: [http://smacss.com/](http://smacss.com/)
* BEM: [http://bem.info/method/](http://bem.info/method/)
* OOCSS: [https://github.com/stubbornella/oocss/wiki](https://github.com/stubbornella/oocss/wiki)
There's also a good article on OOCSS by [Smashing Magazine](http://coding.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/).
* Suitcss: [https://github.com/suitcss](https://github.com/suitcss)
The naming conventions can be found [here](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)