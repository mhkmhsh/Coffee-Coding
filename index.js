document.addEventListener("DOMContentLoaded", () => {
    const cup = document.querySelector('.cup');
    const hiddenContent = document.querySelector('.hidden-content');

    // Set a timeout to remove the loading animation after 2 rotations (8 seconds)
    setTimeout(() => {
        cup.classList.add('hide-after-2-rotations');
    }, 8000); // 8 seconds (2 rotations at 4 seconds each)

    // Show the hidden content after the cup disappears
    setTimeout(() => {
        hiddenContent.style.visibility = 'visible';
        hiddenContent.style.opacity = 1;  // Ensure the element becomes visible
    }, 8000);  // Same 8 seconds delay for consistency
});

// Get the button element
// Select the button using its class
const button = document.querySelector('.continue-btn');

// Move the button down by 20px
button.style.marginTop = '75px';
// Move the button down by adding padding
button.style.paddingTop = '75px';
button.style.position = 'relative';
button.style.top = '75px';

