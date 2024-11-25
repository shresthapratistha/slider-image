let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
   let items = document.querySelectorAll('.item')
   document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 8
 })

 // Add event listener to each Read More button
document.querySelectorAll(".btn").forEach(function(button) {
   button.addEventListener("click", function() {
       // Find the parent .item element that contains the button
       var item = button.closest(".item");

       // Find the invisible content within the .item element
       var invisibleContent = item.querySelector(".invisible-content");
       
       // Toggle the visibility of the .invisible-content
       if (invisibleContent.style.display === "none" || invisibleContent.style.display === "") {
           invisibleContent.style.display = "block"; // Show the content
           button.textContent = "Read Less"; // Optionally change button text to "Read Less"
       } else {
           invisibleContent.style.display = "none"; // Hide the content
           button.textContent = "Read More"; // Optionally change button text back to "Read More"
       }
   });
});




document.addEventListener("DOMContentLoaded", function() {

   // Get the search input and button elements
   const searchBar = document.getElementById('search-input');
   const searchButton = document.getElementById('search-button');
   const containerDiv = document.querySelector('.container'); // Main container
   const slideItems = document.querySelectorAll('.slide .item'); // All the slide items

   // Function to handle search
   searchButton.addEventListener('click', function() {
       // Get the value entered in the search bar
       const searchTerm = searchBar.value.trim().toLowerCase();

       // Check each slide item for a matching country name
       slideItems.forEach(item => {
           const countryName = item.querySelector('.name').textContent.trim().toLowerCase();

           if (countryName === searchTerm) {
               // Hide the main container
               containerDiv.style.display = 'none';

               // Create a new div for the matched country
               const newDiv = document.createElement('div');
               newDiv.classList.add('container');

               // Clone the content of the matched item
               const content = item.querySelector('.content');
               const contentClone = content.cloneNode(true); // Clone the content

               // Set the background image of the new div to match the item's background image
               const backgroundImage = getComputedStyle(item).backgroundImage;
               newDiv.style.backgroundImage = backgroundImage;

               // Add the content to the new div
               newDiv.appendChild(contentClone);

               // Append the new div to the body or a specific section
               document.body.appendChild(newDiv);
           }
       });

       // Clear the search bar after the search
       searchBar.value = '';
   });
});
