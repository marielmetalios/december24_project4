// TODO: Create a variable that selects the form element

const form = document.getElementById('form');
const userNameSubmitted = document.getElementById('username');
const titleSubmitted = document.getElementById('title');
const contentSubmitted = document.getElementById('content');
const submitButton = document.getElementById('button');
const errorMessage = document.getElementById('error');

// we want to clear out form submisstions eventually:
    function clearOutForm() {
        userNameSubmitted.value ="";
        titleSubmitted.value ="";
        contentSubmitted.value =""
    }

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

    function formSubmission () {

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

submitButton.addEventListener('click', function (event) {
    event.preventDefault ();

    // for error message:   
    if (!userNameSubmitted.value.trim())
        { errorMessage.textContent = "Please complete the form!";
        return; }
    
    // we want to clear the error message once they fix their submission...
    errorMessage.textContent = "";
    console.log (formSubmission)


    // so blog posts can be added without spaces before / after: 
    const blogPosts = {
        userName: userNameSubmitted.value.trim(),
        title: titleSubmitted.value.trim(),
        content: contentSubmitted.value.trim(),
    };

    // save to local storage and store as string:
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    console.log ('Blog posts are logged');

    // now run clearOut function so we can clear the form for a new entry:
    clearOutForm ();

    });
    };

    // NOW YOU NEED TO ADD A REDIRECT FUNCTION TOO! 