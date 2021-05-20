/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const docSections = document.getElementsByTagName('section');
var navbar = document.createElement('ul');
const numberOfSections = docSections.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewport(element) { //checks if an element is close to the top of the page
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function findActiveElement(){ //checks for the element closest to the top of the page
    window.addEventListener('scroll', function() {
        for(let section of docSections){
            if(isInViewport(section)){
                section.className = "your-active-class"; //sets class as active
                break;
            }
            else
                section.classList.remove('your-active-class');
        }
    });
}

function scrollTO(elementName){
    navbar.addEventListener('click', function(event){
        const clickedItem = document.querySelector(`[data-nav = "${event.target.textContent}"]`);
        if(clickedItem !== null)
            clickedItem.scrollIntoView({behavior: "smooth"});
    })
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function main() {
    window.addEventListener('load', function(){ //wait for page to load
        navbar.setAttribute('id', 'navbar__list'); //sets id

        const navEle = document.querySelector('nav'); //gets the navbar element

        for(let section of docSections){
            var listItem = document.createElement('li'); 
            listItem.className = 'menu__link';
            listItem.textContent = section.getAttribute('data-nav');

            navbar.appendChild(listItem); //adds the created list item to the navbar
        }
        navEle.appendChild(navbar); //add the navbar to the html page
    });
};

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
main();
// Scroll to section on link click
scrollTO();
// Set sections as active
findActiveElement();
