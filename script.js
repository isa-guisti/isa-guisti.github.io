document.getElementById('loginButton')?.addEventListener('click', function(event) {
    event.preventDefault();
    
    const content = document.querySelector('.content');
    content.classList.add('fade-out');

    setTimeout(function() {
        window.location.href = 'portfolio.html';
    }, 500);
});

window.onload = function() {
    const content = document.querySelector('.content');
    content.classList.add('fade-in');
};

document.addEventListener("DOMContentLoaded", function () {
    const aboutMeBox = document.getElementById("about-me");
    const projectsBox = document.getElementById("projects");
    const zoomDiv = document.getElementById("zoomDiv");
    const diaryDiv = document.getElementById("diaryDiv");

    function toggleBox(box) {
        box.classList.toggle("show");
    }

    // Show the About Me box when clicking zoomDiv
    zoomDiv.addEventListener("click", function() {
        toggleBox(aboutMeBox);
    });

    // Show the Projects box when clicking diaryDiv
    diaryDiv.addEventListener("click", function() {
        toggleBox(projectsBox);
    });

    // Close the About Me box when clicking the close button
    document.querySelector("#about-me .close").addEventListener("click", function() {
        toggleBox(aboutMeBox);
    });

    // Close the Projects box when clicking the close button
    document.querySelector("#projects .close").addEventListener("click", function() {
        toggleBox(projectsBox);
    });
});

