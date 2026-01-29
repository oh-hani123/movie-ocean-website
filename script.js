// script.js - Simple JavaScript for Movie Ocean

// 1. FORM VALIDATION (Simple version)
const reviewForm = document.querySelector('form');

if (reviewForm) {
    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop form from refreshing page
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const movie = document.getElementById('movie').value;
        
        // Simple validation
        let hasError = false;
        
        // Check if fields are empty
        if (name === "") {
            alert("Please enter your name");
            hasError = true;
        }
        
        if (email === "") {
            alert("Please enter your email");
            hasError = true;
        }
        
        if (movie === "") {
            alert("Please enter a movie title");
            hasError = true;
        }
        
        // If no errors, show success message
        if (!hasError) {
            alert("Thank you! We received your request for: " + movie);
            reviewForm.reset(); // Clear the form
        }
    });
}

// 2. IMAGE CLICK ENHANCEMENT (Simple feature)
const movieImages = document.querySelectorAll('img');

movieImages.forEach(image => {
    image.addEventListener('click', function() {
        alert("You clicked on: " + this.alt);
    });
    
    // Add hover effect
    image.addEventListener('mouseover', function() {
        this.style.transform = "scale(1.02)";
        this.style.transition = "0.3s";
    });
    
    image.addEventListener('mouseout', function() {
        this.style.transform = "scale(1)";
    });
});

// 3. CURRENT YEAR IN FOOTER (Dynamic content)
const footer = document.querySelector('footer p:last-child');
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = "&copy; " + currentYear + " Movie Ocean Reviews. All rights reserved.";
}

// 4. SIMPLE NAVIGATION HIGHLIGHT
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.style.color = "white";
        link.style.backgroundColor = "cadetblue";
        link.style.padding = "5px 10px";
        link.style.borderRadius = "5px";
    }
});

// 5. SHOW VISIT COUNT (LocalStorage example)
if (typeof(Storage) !== "undefined") {
    // Check if visit count exists
    if (localStorage.getItem("visitCount")) {
        // Get current count and add 1
        let count = Number(localStorage.getItem("visitCount")) + 1;
        localStorage.setItem("visitCount", count);
    } else {
        // First visit - set to 1
        localStorage.setItem("visitCount", 1);
    }
    
    // Optional: Show visit count in console
    console.log("You have visited this page " + localStorage.getItem("visitCount") + " time(s)");
}

// 6. SIMPLE DARK MODE TOGGLE (Bonus feature)
const darkModeButton = document.createElement('button');
darkModeButton.textContent = "🌙 Dark Mode";
darkModeButton.style.position = "fixed";
darkModeButton.style.top = "10px";
darkModeButton.style.right = "10px";
darkModeButton.style.padding = "5px 10px";
darkModeButton.style.background = "#2c3e50";
darkModeButton.style.color = "white";
darkModeButton.style.border = "none";
darkModeButton.style.borderRadius = "5px";
darkModeButton.style.cursor = "pointer";

document.body.appendChild(darkModeButton);

darkModeButton.addEventListener('click', function() {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "white";
        darkModeButton.textContent = "☀️ Light Mode";
    } else {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        darkModeButton.textContent = "🌙 Dark Mode";
    }
});

// 7. SIMPLE ALERT FOR NEW VISITORS
window.onload = function() {
    if (!localStorage.getItem("firstVisit")) {
        setTimeout(function() {
            alert("Welcome to Movie Ocean Reviews! 🎬\nExplore our movie reviews and request your favorites!");
            localStorage.setItem("firstVisit", "done");
        }, 1000);
    }
};

// 8. BACK TO TOP BUTTON (Simple)
const topButton = document.createElement('button');
topButton.textContent = "⬆ Top";
topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "10px";
topButton.style.background = "cadetblue";
topButton.style.color = "white";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.cursor = "pointer";
topButton.style.display = "none";

document.body.appendChild(topButton);

// Show button when scrolling down
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

// Scroll to top when clicked
topButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});