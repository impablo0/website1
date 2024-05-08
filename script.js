function toggleMenu() {
    var navLinksContainer = document.querySelector('.nav-links-container');
    navLinksContainer.classList.toggle('show');
    
    var navButton = document.querySelector('.navbar > nav > .nav-links-container > .nav-links > #hamburger-menu-item');
    navButton.classList.toggle('show');
}

function getStarted() {
    
}

function contactSupport() {
    var firstName = document.getElementById("contact-us-first-name").value;
    var lastName = document.getElementById("contact-us-last-name").value;
    var email = document.getElementById("contact-us-email").value;
    var message = document.getElementById("contact-us-text").value;

    if (!firstName || !lastName || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    var data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
    };

    var url = `/submit-contact-form`;
    var xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert(xhr.responseText);
            } else {
                alert("An error occurred. Please try again later.");
            }
        }
    };

    xhr.send(JSON.stringify(data));
}