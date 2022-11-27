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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBarList = document.querySelectorAll('section');
const nav = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
nav.addEventListener("click", (event) => {
    event.preventDefault()
    const section = document.getElementById(event.target.id.replaceAll("_", ""));
    console.log(event)
    section.scrollIntoView({behaviour: "smooth"});
})

function inViewPort(element) {
    const rect = element.getBoundingClientRect();
    return (
        // rect.top >= 0 &&
        rect.left >= 0 &&
        // In case the browser does not support .innerHeight, 
        // it falls back to the older document.documentElement.clientheight
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav

function navList() {
    navBarList.forEach((section) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const content = document.createTextNode(
            `${section.dataset.nav}`
        );
        a.setAttribute('href', `${section.id}`);
        a.setAttribute('id', `${section.id}_`);
        a.setAttribute('class', 'menu__link');
        a.appendChild(content);
        li.appendChild(a);
        nav.append(li);
       
    });

}
navList();
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
document.addEventListener("scroll", () => {
    navBarList.forEach((section) => {
        inViewPort(section) ? section.classList.add("active") :
        section.classList.remove("active");
    });
})
