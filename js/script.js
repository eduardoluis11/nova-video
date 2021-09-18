/* This will open and close the side navbar when clicking the hamburger menu icon (source:
https://www.w3schools.com/howto/howto_js_sidenav.asp)

The "style.width" property only works for IDs, not for classes. However, I want to use classes, not IDs. So, I will look
for the equivalent version in JS for classes (to modify the CSS property of a class using JS.) 

To use classes, I will use "querySelectorAll" to select "mySideNavbar" as a class, and then I will use a "for" loop
to iterate over all instances of the "mySidenavbar" class. This way, I'll be able to click on the hamburgeur menu icon, 
and the button should work (by using a class instead of an ID) (source: 
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselectorall_class)  */


/* Set the width of the side navigation to 250px */
function openNavbar() {
    var x, i;
    x = document.querySelectorAll(".mySidenavbar");
    for (i = 0; i < x.length; i++) {
      x[i].style.width = "250px";
    }
}
  
/* Set the width of the side navigation to 0 */
function closeNavbar() {
    var x, i;
    x = document.querySelectorAll(".mySidenavbar");
    for (i = 0; i < x.length; i++) {
      x[i].style.width = "0";
    }
}
