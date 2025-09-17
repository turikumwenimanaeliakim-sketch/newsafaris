

function navigateHome() {
    window.location.href = '/index (1).html'; // Redirect to the home page
  }
  function scrollUp() {
    window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' }); // Smooth scroll up
  }
  
  function scrollDown() {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' }); // Smooth scroll down
  }
  
  function goBack() {
    window.history.back(); // Go back to the previous page
  }
  const images = document.querySelectorAll('.gallery img');
    
  images.forEach(image => {
  image.addEventListener('click', () => {
      const src = image.src;
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.innerHTML = `<span class="close">&times;</span><img src="${src}" class="modal-content">`;
      document.body.appendChild(modal);
  
      const closeBtn = modal.querySelector('.close');
      closeBtn.addEventListener('click', () => {
          modal.remove();
      });
  });
  });

  function toggleText(id) {
    const moreText = document.getElementById(id);
    moreText.classList.toggle("show");
    const btn = moreText.nextElementSibling;
    btn.textContent = moreText.classList.contains("show") ? "Read less" : "Read more";
}
function toggleDetails(button) {
    const details = button.nextElementSibling;
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
  }  
   // Function to handle form submission
   document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Retrieve form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const destination = document.getElementById("destination").value;
    const people = document.getElementById("people").value;
    const itinerary = document.getElementById("itinerary").value;

    // Send data via EmailJS
    emailjs.send("service_wvxahwf","template_q5c9qsb", {
        name: name,
        email: email,
        phone: phone,
        date: date,
        time: time,
        destination: destination,
        people: people,
        itinerary: itinerary,
    })
    .then(function (response) {
        // Display confirmation message
        document.getElementById("confirmationMessage").innerHTML = 
            "Thank you! Your booking has been submitted successfully.";
        document.getElementById("bookingForm").reset(); // Reset the form
    }, function (error) {
        // Handle error
        document.getElementById("confirmationMessage").innerHTML = 
            "Sorry, there was an error submitting your booking. Please try again.";
    });
});
// watsapp icon//
document.addEventListener('DOMContentLoaded', function() {
  const whatsappNumber = '+250787448579'; // Replace with your WhatsApp number
  const message = 'Hello! I need assistance.'; // Optional message
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const whatsappLinkElement = document.getElementById('whatsapp-link');
  whatsappLinkElement.setAttribute('href', whatsappLink);
});
 // JavaScript to handle the mobile menu toggle
 const mobileMenu = document.getElementById('mobile-menu');
 const navbar = document.querySelector('.navbar');
 
 mobileMenu.addEventListener('click', () => {
     navList.classList.toggle('active');
 });
 // textimoni//
 let currentTestimonial = 1;

 function showTestimonial(index) {
     const testimonials = document.querySelectorAll('.testimonial');
     const dots = document.querySelectorAll('.dot');
 
     testimonials.forEach((testimonial, i) => {
         testimonial.classList.remove('active');
         dots[i].classList.remove('active');
     });
 
     testimonials[index - 1].classList.add('active');
     dots[index - 1].classList.add('active');
     currentTestimonial = index;
 }
 
 // Initialize the first testimonial
 showTestimonial(currentTestimonial);