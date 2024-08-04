document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    const educationSection = document.getElementById('educationSection');
    observer.observe(educationSection);
});



// **** contact ****

document.getElementById('mailMe').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'mailto:arsalkhan1822@gmail.com';
});

document.getElementById('openMap').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://www.google.com/maps?q=Kalyan,MH';
});
document.getElementById('github').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://github.com/khanarsal18';
});
document.getElementById('linkedin').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://www.linkedin.com/in/arsal-khan-212a23299/';
});

