// TODO: Create a variable that selects the form element

const form = document.getElementById('form');
const userNameSubmitted = document.getElementById('username');
const titleSubmitted = document.getElementById('title');
const contentSubmitted = document.getElementById('content');
const submitButton = document.getElementById('button');
// need const error also?????


// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function formSubmission () {

} 


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

submitButton.addEventListener('click', function (event) {
    event.preventDefault ();

    const blogPosts = {
        userName: userNameSubmitted.value.trim(),
        title: titleSubmitted.value.trim(),
        content: contentSubmitted.value.trim(),
    };

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    // localStorage.getItem(formSubmission);
    console.log('Blog posts are logged');

    // formSubmission ()

});

