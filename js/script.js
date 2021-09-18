/* This will open and close the side navbar when clicking the hamburger menu icon (source:
https://www.w3schools.com/howto/howto_js_sidenav.asp)

The "style.width" property only works for IDs, not for classes. However, I want to use classes, not IDs. So, I will look
for the equivalent version in JS for classes (to modify the CSS property of a class using JS.) */

/* Set the width of the side navigation to 250px */
function openNavbar() {
    document.getElementById("mySidenavbar").style.width = "250px";
}
  
/* Set the width of the side navigation to 0 */
function closeNavbar() {
    document.getElementById("mySidenavbar").style.width = "0";
}
