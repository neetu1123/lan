document.addEventListener('DOMContentLoaded', function() {
    const newsletterOverlay = document.getElementById('newsletterOverlay');
    const hasSeenNewsletter = localStorage.getItem('hasSeenNewsletter');

    // Show newsletter popup if user hasn't seen it before
    if (!hasSeenNewsletter) {
        // Slight delay for better user experience
        setTimeout(() => {
            showNewsletter();
        }, 1500);
    }

    // Function to show newsletter
    function showNewsletter() {
        newsletterOverlay.classList.add('show');
    }

    // Function to hide newsletter
    function hideNewsletter() {
        newsletterOverlay.classList.remove('show');
        // Store that user has seen the newsletter
        localStorage.setItem('hasSeenNewsletter', 'true');
    }

    // Close when clicking outside the newsletter content
    newsletterOverlay.addEventListener('click', function(event) {
        // Check if the click is outside the newsletter container
        if (event.target === newsletterOverlay) {
            hideNewsletter();
        }
    });

    // Handle form submission
    const newsletterForm = document.getElementById('mc-embedded-subscribe-form');
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('mce-EMAIL').value;
        const firstName = document.getElementById('mce-FNAME').value;
        
        // You would typically send this data to your server or Mailchimp API
        console.log('Form submitted with:', { email, firstName });
        
        // For this example, we'll just store that they've subscribed and close the popup
        localStorage.setItem('hasSeenNewsletter', 'true');
        localStorage.setItem('hasSubscribed', 'true');
        
        alert('Thank you for subscribing! Your promo code will be sent to your email.');
        hideNewsletter();
    });

    // For testing - add a way to reset the newsletter popup
    // Uncomment this to test or use in development
    /*
    window.resetNewsletter = function() {
        localStorage.removeItem('hasSeenNewsletter');
        localStorage.removeItem('hasSubscribed');
        alert('Newsletter reset. Reload page to see it again.');
    };
    */
});
