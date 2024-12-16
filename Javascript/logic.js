// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
 const toggleFunctionality = document.getElementById("toggle");

 toggleFunctionality.addEventListener('change', function (toggle) {
     if (toggleFunctionality.checked) {
         const sliderBefore = document.querySelector('.slider:before');
         sliderBefore.style.transform = 'translateX(26px)';
     } else {
         const sliderBefore = document.querySelector('.slider:before');
         sliderBefore.style.transform = 'none';
     }

 });



// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = 'http://127.0.0.1:5500/blog.html';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
