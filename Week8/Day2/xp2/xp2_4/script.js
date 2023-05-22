// Exercise 4 : Welcome

// Instructions

// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function(userName) {
    const userProfile = document.getElementById('userProfile');

    const userDiv = document.createElement('div');
    userDiv.classList.add('nav-link');

    const nameSpan = document.createElement('span');
    nameSpan.textContent = userName;

    const profileImage = document.createElement('img');
    profileImage.src = 'picture.jpg';
    profileImage.alt = 'Profile Picture';
    profileImage.style.width = '50px';

    userDiv.appendChild(nameSpan);
    userDiv.appendChild(profileImage);

    userProfile.appendChild(userDiv);
}) ('Cookie');