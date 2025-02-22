document.addEventListener("DOMContentLoaded", () => {
    const cup = document.querySelector('.cup');
    const hiddenContent = document.querySelector('.hidden-content');
    const button = document.querySelector('.continue-btn');

    // Set a timeout to remove the loading animation after 2 rotations (8 seconds)
    setTimeout(() => {
        cup.classList.add('hide-after-2-rotations');
    }, 8000); // 8 seconds (2 rotations at 4 seconds each)

    // Show the hidden content after the cup disappears
    setTimeout(() => {
        hiddenContent.style.visibility = 'visible';
        hiddenContent.style.opacity = 1;  // Ensure the element becomes visible
    }, 8000);  // Same 8 seconds delay for consistency

    // Add a class to move the button after the animations are complete
    setTimeout(() => {
        if (button) {
            button.classList.add('move-btn'); // Add the move-btn class to the button
        }
    }, 8000); // 8 seconds delay (same as the previous timeout)
});
