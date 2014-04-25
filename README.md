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
	
##Useful built-in Sass functions
	width: percentage(0.2) => width: 20%
	width: percentage(100px / 50px) => width: 200%
	color: rgba(#ff0000, 0.5); ==> color: rgba(255,0,0,0.5)
	margin: set-nth($list: 10px 20px 30px, $n: 2, $value: -20px) => margin: 10px -20px 30px;

##Useful mixins and functions (extended) by Kega
	@include rem(padding, 5px) => padding: 5px; padding: 0.5rem; //fallback for older browsers
	@include element-font-bg-color(#fff); => background: #fff; color: #000; //checks if the text color isn't too light for the background
	width: percentage(strip-unit(100px) / strip-unit(50px)) => width: 200% // strip the unit from the value
	@extend %clearfix; //extending the silent class .clearfix which prevents template copies

##Sass and vendor-prefixes
As with normal CSS, we don't use tools and / or libraries for autoprefixing the css properties for al vendors.
You can use Emmet which is available in PHPStorm for this.

	box-sha (press TAB) results in -> -webkit-box-shadow: ;-moz-box-shadow: ;box-shadow: ;
