#Sass for KEGA

##Description
A proof of concept where we proof Sass will be useful at Kega.

##Architecture
	- base; contains the basic page styling like normalize, variables (colors and fonts) and mixins.
	- templates; contains the segments of the website structured by example in header, breadcrumbs and footer.
	- pages; contains page specific styling, like we currently have.

	main.scss; **do not write css or sass here** this file compiles everything into a css file.

##Tools
Using watcherTasks.xml as File watcher in PHPStorm and certain arguments renders the css with the correct (debug) parameters and without cache.

	--no-cache --update --sourcemap --style compressed


##Notes
- In base/reset we added legacy support for .clearfix class. In new projects we don't have to add a .clearfix class, but we can use a silent class, which will not be included in the css file as a class.


	.nav-container {
		@extend %clearfix;
	}
	
- Useful built-in Sass functions
	width: percentage(0.2) => width: 20%
	width: percentage(100px / 50px) => width: 200%
