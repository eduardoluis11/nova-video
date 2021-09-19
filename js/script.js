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
  
/* Set the width of the side navigation to 0.

I had a bug in which, if I used a small screen and touched the hamburger menu icon, the text of the navbar would get
messed up on larger screens, and I would be forced to refresh the page to fix the text. 

This was being caused because the div that contains the "sidenavbar" and "mySidenavbar" classes would get a "styles" tag
after pressing the hamburguer menu icon or the "x" icon to close it. 

To solve this, I will remove the "styles" tag when closing the side navbar, which is achieved by turning the "width" property
into "null" (source: https://stackoverflow.com/questions/18691655/remove-style-on-element).

However, this bug will still be present if the user decides to keep the hamburger menu activated while on a small screen, and 
then deciding to change into a larger screen. This is currently only possible to do in the "Responsive Design" view of
Firefox Developer Edition, since most broswers on laptops/desktop computers won't let you to scale down the width of the 
browser below 415 px, which is when this bug would trigger.*/
function closeNavbar() {
    var x, i;
    x = document.querySelectorAll(".mySidenavbar");
    for (i = 0; i < x.length; i++) {
      x[i].style.width = null;
    }
}
