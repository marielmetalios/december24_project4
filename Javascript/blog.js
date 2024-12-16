// TODO: DONE! 
// 
// Variables created below that select the DOM elements (id = main and = id = back button)
// Reminder, constants are block scoped and cannot be changed

const mainElement = document.getElementById('main');
const backButton =  document.getElementById('back');

// TODO: DONE! 
// creates new constant with Blog Posts identifier (i.e. selects the blog posts)
    const newElement = document.getElementById('blogPosts');


// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

    function renderBlogList () {
    
    // now the allContent constant holds the parsed (object) blogPosts (stringed) content. 
    const allContent = JSON.parse(localStorage.getItem('blogPosts'));

// TODO: Create a function that handles the case where there are no blog posts to display

    if (allContent.length === 0 ) {
        cannotPopulate ();
        console.log ("No blog posts to display!")
        return;
       }    

    // create the new entries as children:
    allContent.forEach (entry => {
        const newPostInMain = document.createElement('div');
        
        // need backticks below so our values can be passed in correctly
        newPostElement.innerHTML = `
        <h2>${entry.title}</h2>
        <p>${entry.userName}</p>
        <p>${entry.content}</p> `;

    mainElement.appendChild (newPostInMain);
    console.log(`New blog post has been created`);
    });


// TODO: Call the `renderBlogList` function
    renderBlogList ();
};   

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

const redirect = document.getElementById('back');

backButton.addEventListener('click', function (event) {
    event.preventDefault ();

let redirectURL = 'http://127.0.0.1:5500/index.html';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
}
});
