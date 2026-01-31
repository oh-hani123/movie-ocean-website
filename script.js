
const reviewForm = document.querySelector('form');

if (reviewForm) {
    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const movie = document.getElementById('movie').value;
        
        
        let hasError = false;
        
        
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
        
    
        if (!hasError) {
            alert("Thank you! We received your request for: " + movie);
            reviewForm.reset(); 
        }
    });
}

const movieImages = document.querySelectorAll('img');

movieImages.forEach(image => {
    image.addEventListener('click', function() {
        alert("You clicked on: " + this.alt);
    });
    
    image.addEventListener('mouseover', function() {
        this.style.transform = "scale(1.02)";
        this.style.transition = "0.3s";
    });
    
    image.addEventListener('mouseout', function() {
        this.style.transform = "scale(1)";
    });
});


const footer = document.querySelector('footer p:last-child');
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = "&copy; " + currentYear + " Movie Ocean Reviews. All rights reserved.";
}


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




window.onload = function() {
    if (!localStorage.getItem("firstVisit")) {
        setTimeout(function() {
            alert("Welcome to Movie Ocean Reviews! 🎬\nExplore our movie reviews and request your favorites!");
            localStorage.setItem("firstVisit", "done");
        }, 1000);
    }
};


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


window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});


topButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});
