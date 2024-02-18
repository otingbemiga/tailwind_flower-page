const initApp = () =>{
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')

        // last to be created for menu bar
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}


document.addEventListener('DOMContentLoaded', initApp)



// ===================CONTACT FORM =======================//


    // get the form values
    var name = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // validate the form values
    if (subject.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all the fields.");
        return;
    }

    // send the email
    var mailtoLink = "mailto:otingbemiga@gmail.com? subject=New message from your website&body=Subject: " + subject + "%0D%0AEmail: " + email + "%0D%0AMessage:%0D%0A" + message;
    window.location.href = mailtoLink;


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the form from being submitted

}); 

