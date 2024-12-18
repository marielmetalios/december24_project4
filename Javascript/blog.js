// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.getElementById('main');
const backButton =  document.querySelector('.back');
const blogsPosted = JSON.parse.localStorage.getItem('blogPosts') || [];
// const newElement = document.getElementById('blogPosts');

// TODO: Create a function that builds an element and appends it to the DOM
const newBlogListItem = document.createElement('div');
newBlogListItem.textContent = "";
function appending() {
    mainElement.appendChild(newBlogListItem);
}
// TODO: Create a function that handles the case where there are no blog posts to display
function cannotPopulate() {}
    if (!blogsPosted || blogsPosted.length <= 0 ) {
        console.log ("No blog posts to display!")
        return;
       }    

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    if (blogsPosted.length > 0) { 
        console.log ('Blog list rendering');
        // now the allContent constant holds the parsed (object) blogPosts (stringed) content. 
        // const allContent = JSON.parse(localStorage.getItem('blogPosts'));
        const newBlogListItem = document.createElement('div'); 
        newBlogListItem.forEach (entry => {
                    // need backticks below so our values can be passed in correctly
                    newBlogListItem.innerHTML = `
                    <h2>${entry.title}</h2>
                    <p>${entry.userName}</p>
                    <p>${entry.content}</p> `;
        
                    mainElement.appendChild (newBlogListItem);
                    console.log(`New blog post has been created`);
                    });
    } else {
        console.log('No blog posts submitted')
        cannotPopulate(); 
    }
};


// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

let redirectURL = 'http://127.0.0.1:5500/index.html';

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
  };

const redirect = document.getElementById('back');
backButton.addEventListener('click', function (event) {
    event.preventDefault ();

});


