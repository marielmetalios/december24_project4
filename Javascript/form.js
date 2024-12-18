// TODO: Create a variable that selects the form element

const form = document.getElementById('form');
const userNameSubmitted = document.getElementById('username');
const titleSubmitted = document.getElementById('title');
const contentSubmitted = document.getElementById('content');
const submitButton = document.getElementById('button');
const errorMessage = document.getElementById('error');
let blogsPosted = JSON.parse(localStorage.getItem('blogPosts')) || [];


// we want to clear out form submisstions eventually:
    function clearOutForm() {
        userNameSubmitted.value ="";
        titleSubmitted.value ="";
        contentSubmitted.value ="";
    };

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

    function formSubmission () {

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

submitButton.addEventListener('click', function (event) {
    event.preventDefault ();

    // TODO: EDIT THIS THIS IS COPIED redirect logic from logic.js given!
    const redirectURL = 'http://127.0.0.1:5500/blog.html';

    // for error message to trigger if any of the entries are blank:   
    if (!userNameSubmitted.value.trim())
        { errorMessage.textContent = "Please complete the form!";
            return; }

    if (!titleSubmitted.value.trim())
        { errorMessage.textContent = "Please complete the form!";
            return; }

    if (!contentSubmitted.value.trim())
        { errorMessage.textContent = "Please complete the form!";    
            return; }
    
    // we want to clear the error message once they fix their submission...
    errorMessage.textContent = "";

    // so blog posts can be added as object without spaces before / after: 
    const blogPosts = {
        userName: userNameSubmitted.value.trim(),
        title: titleSubmitted.value.trim(),
        content: contentSubmitted.value.trim(),
    };

    // blogsPosted.push(blogPosts);

    // save to local storage and store as string:
    localStorage.setItem('blogPosts', JSON.stringify(blogsPosted));
    console.log ('Blog posts are logged and stored in local', blogPosts);

    // now use this.method to redirect to the URL defined above 
    location.assign(redirectURL);
    console.log(`can we console log a redirect page? TESTING`);
          
    // MAR - add this instead for the blog.js page 
    // const blogPostObjects = JSON.parse(localStorage.getItem('blogPosts'));

    // now run clearOut function so we can clear the form for a new entry:
    clearOutForm ();

    });
    };

    formSubmission();
 
