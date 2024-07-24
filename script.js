// Navbar Show Hide JS
document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll Down
            navbar.classList.add('navbar-hidden');
        } else {
            // Scroll Up
            navbar.classList.remove('navbar-hidden');
        }
        lastScrollTop = scrollTop;
    });
});

// Text Marquee (below name)
document.addEventListener('DOMContentLoaded', function () {
    const texts = document.querySelectorAll(".animated-text h6");
    let index = 0;

    function changeText() {
        console.log('Changing text'); // Debugging statement
        texts.forEach((text, i) => {
            if (i === index) {
                text.classList.add("active");
            } else {
                text.classList.remove("active");
            }
        });
        index = (index + 1) % texts.length;
    }

    setInterval(changeText, 3000); // Change text every 3 seconds
});


 // Update progress bars with different colors based on knowledge percentage
 document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(progressBar => {
        const percent = parseInt(progressBar.textContent);
        if (percent >= 90) {
            progressBar.style.backgroundColor = "#4CAF50"; // Green color for high knowledge
        } else if (percent >= 80) {
            progressBar.style.backgroundColor = "#2196F3"; // Blue color for medium-high knowledge
        } else if (percent >= 70) {
            progressBar.style.backgroundColor = "#FF9800"; // Orange color for medium knowledge
        } else {
            progressBar.style.backgroundColor = "#f44336"; // Red color for low knowledge
        }
        progressBar.style.width = percent + "%"; // Set the width of the progress bar
    });
});