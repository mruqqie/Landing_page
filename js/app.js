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
function inViewPort(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
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
    });

}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
navList();

// Scroll to section on link click
nav.addEventListener("click", (e) => {
    e.preventDefault()
    const id = e.target.id.replaceAll("_", "");
    const section = document.getElementById(id);
    section.scrollIntoView({behavior:'smooth'});
    const navLi = document.querySelectorAll('#navbar__list a')
    navLi.forEach(element => {
        if (element.id === `${id}_`) {
            document.querySelector(`#${element.id}`).classList.add("active__sec");
        } else {
            document.querySelector(`#${element.id}`).classList.remove("active__sec");
        }
    });
})


// Set sections as active
document.addEventListener("scroll", () => {
    navBarList.forEach((section) => {
        inViewPort(section) ? section.classList.add("active") :
        section.classList.remove("active");
    });
})


