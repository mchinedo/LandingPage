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

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
/*
Resources:
  * Landing Page Study Session (https://www.youtube.com/watch?v=Sb7xzfN4Oag)
  * Google
  * StackOverflow
  * Slack FEND Channel
*/
//Obtains all elements with 'section' which is returned as an array and stored  in the variable "sectionList"
const sectionList = document.querySelectorAll("section");

//Obtains element with 'navbar__menu' class and stores it in the variable "navBar"
const navBar = document.getElementsByClassName("navbar__menu");

//Obtains element with 'navbar__list' id and stores it in the variable "navItem"
const navItem = document.getElementById("navbar__list");

/*
With the elements we obtained above, our goal is to create items within the navbar.
By using a foreach loop, we will be able to iterate through each section, create a corresponding list item, and add it to the navbar
*/

//This for loop terates through each section
sectionList.forEach((item) => {
  //Obtains the 'data-nav' attribte and stores it in the variable "sectionName"
  const sectionName = item.getAttribute("data-nav");

  //Obtains the 'id' attribte and stores it in the variable "sectionId"
  const sectionId = item.getAttribute("id");

  //Creates a new list element and stores it under the variable "newList"
  const newList = document.createElement("li");

  /*
  Takes our newly created list element, and sets the innerHTML using Template Literals
  as well as our variables from above (sectionName)
  */

  //Creates the innerHTML for our new list element
  newList.innerHTML = `${sectionName}`;

  //Adds an eventListener to each list item which listens for a click and scrolls smoothly to the specific section
    newList.addEventListener('click', function () {
      item.scrollIntoView({
        behavior: 'smooth',
      });
    });

  //This adds our new list element to our navItem which is the variable for the navbar__list
  navItem.appendChild(newList);

  /*
Due to the fact that we are using a foreach loop, this process will occur for each section within sectionList, so a total of 5 times.
For each section, It will take the section name, section id, create a new list, set the innerHTML of the new list and add it to our nav bar.
*/
});

/*
Later in the code, we will need to access each list item as well as retrive an identifying attribute for each list item.
Hence, we will query select all "li" elements and add a class to each list item
*/

//Obtains all elements with 'li' which is returned as an array and stored  in the variable "list"
const list = document.querySelectorAll("li");

//Adds the class 'section1' to the first list item
list[0].classList.add("section1");

//Adds the class 'section2' to the second list item
list[1].classList.add("section2");

//Adds the class 'section3' to the third list item
list[2].classList.add("section3");

//Adds the class 'section4' to the fourth list item
list[3].classList.add("section4");

//Adds the class 'section5' to the last list item
list[4].classList.add("section5");

/*
One of the features of my landing page is having a section highlight when in view and having the corresponding list item within the nav bar highlight as well.

The first way to do it is to add an eventlistener to the window which will highlight the section upon scrolling to it in the window, which in turn, highlights the navitem.

We will utilize a foreach loop which will go through each section and get the bounds. If the bounds are within a specific range, it will add the active class list which has special styling instructions such as the highlight feature.
If it's not within the bounds, the active class will be removed. This will occur for each specific section in the window.

Within the forech loop that determines whether the section is active, you need to have a foreach loop that focuses on the nav item.
Since it has to highlight when the section is highlighted, we need to iterate through each list item.
If the list class name is the same as the section id, then they correspond with each other and should highlight at the same time. If not, it won't highlight.
We can do this by adding an active class to the list, if the section is active, and removing it if the section is not.
*/

//Adds event listener method to the window, with 'scroll' and function as parameters.
window.addEventListener("scroll", function (event) {
  //Starts a foreach loop which iterates over each section
  sectionList.forEach((item) => {
    //Gets the bounds of thr section and stores it under variable "bounds"
    const bounds = item.getBoundingClientRect();
    //console.log(bounds.top);

    /*
    While there are many ways to get the bounds that determines whether the section is in view and should be active, the way I determined mine was through using the innerheight method on the window.
    By calling window.innerHeight() within the event listener, and printing out the top bounds of a section of my choice, I was able to see what I considered as "in view", and what the specific bound numbers were.
    I took note of those numbers from the console, and used them as my bounds!
    */

    //Creates an if else statement to determine if the section is in view or "active"
    if (bounds.top > -676 && bounds.top < 943) {
      //If the section is within said bounds, add the class "your-active-class" to the specific section
      item.classList.add("your-active-class");

      /*
      To make sure that the list item in the nav bar highlights when the section is active/highlighted, we need to nested a foreach loop within the if-else statement.
      We will iterate through each list element and if the class name of the list element matches the id, we will add an active class to the list element. If not, we remove it.

      The reason why this is happening within the if-else statement within the foreach loop for each section is because we only want the liat item to highlight, IF all the above conditions are met, such as the section being in view.
      */

      //Creates a foreach loop which iterates through each list element
      list.forEach((elem) => {
        //Creates an if else statement that determines if the list class name and section id are equivalent
        if (elem.getAttribute("class") == item.getAttribute("id")) {
          //If the condition is true, add the active class to the specific list element. This class will highlight the item in the nav bar.
          elem.classList.add("active-class");
          //  console.log("I'm working");

          //If the condition is not true, remove the active class from the list element
        } else {
          elem.classList.remove("active-class");
        }
      });
      //If the section is out of view, remove the active class
    } else {
      item.classList.remove("your-active-class");
    }
  });
});
