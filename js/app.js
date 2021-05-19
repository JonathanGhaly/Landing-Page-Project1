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
const navBar = document.createElement('ul');
//const sectionCount = docSections.length;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function viewPortXY(elem){
    const pos = elem.getBoundingClientRect();
    const x = pos.top , y=pos.bottom ;
    return(
        x >=0 &&
        y <=(window.innerHeight || document.documentElement.clientHeight)
    );
}
function activeSection(){
    window.addEventListener('scroll', function(){
        
        for(let section of docSections){
           if(viewPortXY(section)){
               section.className="your-active-class";
               break;
           }
           else
                section.classList.remove('your-active-class');
        }
        
    });
}

function scrollToSection(elemName){
    navBar.addEventListener('click',function(event){
        const clickedSection = document.querySelector(`[data-nav = "${event.target.textContent}"]`);
        if(clickedSection !== null){
            clickedSection.scrollIntoView({behavior:"smooth"});
        }
    });
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function main1() {
    window.addEventListener('load', function(){ //wait for page to load
        navBar.setAttribute('id', 'navbar__list'); //sets id

        const navElement = document.querySelector('nav'); //gets the navbar element

        for(let section of docSections){
            var listItem = document.createElement('li'); 
            listItem.className = 'menu__link';
            listItem.textContent = section.getAttribute('data-nav');
            navBar.appendChild(listItem); //adds the created list item to the navbar
        }
        navElement.appendChild(navBar); //add the navbar to the html page
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

// Scroll to section on link click

// Set sections as active
main1();
scrollToSection();
activeSection();

