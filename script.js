document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Form Validation for Contact and Inquiry Forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            let name = form.querySelector('input[name="name"]');
            let email = form.querySelector('input[name="email"]');
            let message = form.querySelector('textarea[name="message"]');

            if (!name || !email || !message) {
                alert('Please ensure all form fields are present.');
                event.preventDefault();
                return;
            }

            if (!name.value || !email.value || !message.value) {
                alert('Please fill in all fields.');
                event.preventDefault();
            } else if (!/\S+@\S+\.\S+/.test(email.value)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
            }
        });
    });

    // Simple Slideshow for Homepage (assuming there's only one on the index.html)
    const slides = document.querySelectorAll('.slideshow img');
    if (slides.length > 0) {
        let slideIndex = 0;

        function showSlides() {
            slides.forEach(slide => slide.style.display = 'none');
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = 'block';
            setTimeout(showSlides, 3000); // Change image every 3 seconds
        }
        showSlides(); // Start the slideshow
    }

    // Scroll to Section (for navigation links that use #hash)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Faculty Search Functionality (for the faculty page)
    const searchFaculty = document.getElementById('searchFaculty');
    const facultyMembers = document.querySelectorAll('.faculty-member');

    if (searchFaculty && facultyMembers.length > 0) {
        searchFaculty.addEventListener('input', function() {
            let filter = searchFaculty.value.toLowerCase();
            facultyMembers.forEach(member => {
                let name = member.querySelector('h3').textContent.toLowerCase();
                let department = member.querySelector('p').textContent.toLowerCase();
                if (name.includes(filter) || department.includes(filter)) {
                    member.style.display = '';
                } else {
                    member.style.display = 'none';
                }
            });
        });
    }

    // Event Search Functionality (for the past events page)
    const searchEvent = document.getElementById('searchEvent');
    const events = document.querySelectorAll('.event-list li');

    if (searchEvent && events.length > 0) {
        searchEvent.addEventListener('input', function() {
            let filter = searchEvent.value.toLowerCase();
            events.forEach(event => {
                let title = event.querySelector('h3').textContent.toLowerCase();
                let description = event.textContent.toLowerCase();
                if (title.includes(filter) || description.includes(filter)) {
                    event.style.display = '';
                } else {
                    event.style.display = 'none';
                }
            });
        });
    }

    // Placeholder for future dynamic content or interactions
    function updateDynamicContent() {
        // This function can be expanded for real-time content updates, 
        // like fetching new events, news, or updates from a server if needed.
    }

    // Initial call to update dynamic content if needed
    updateDynamicContent();
});

document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('rsvpForm');

    rsvpForm.addEventListener('submit', function(event) {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let terms = document.getElementById('terms').checked;

        if (!name || !email || !terms) {
            alert('Please fill out all required fields and agree to the terms.');
            event.preventDefault();
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        } else {
            alert('RSVP submitted successfully! Thank you for your response.');
            event.preventDefault(); // Prevent form from actually submitting if not using server-side handling
        }
    });
});