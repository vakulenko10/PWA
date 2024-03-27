document.addEventListener("DOMContentLoaded", function() {
    // Output a message to the console to indicate that the script is connected
    console.log("Script connected successfully!");
});
document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('click', () => {
        console.log('click');
        // item.classList.toggleClass('absolute'); // Toggle absolute positioning
        // item.querySelector('.item-info').classList.toggleClass('visible'); // Toggle visibility of item-info
    });
});

