const contactForm = document.querySelector('.contact-form');

let username = document.getElementById('username');
let email = document.getElementById('email');
let subjects = document.getElementById('subjects');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedGender = document.querySelector('input[name="gender"]:checked');

    let formData = {
        username: username.value,
        email: email.value,
        subjects: subjects.value,
        selectedGender: selectedGender ? selectedGender.value : '',
        skills: [],
        message: message.value,
    }

    document.querySelectorAll('[type="checkbox"]').forEach((item) => {
        if (item.checked === true) {
            formData.skills.push(item.value);
        }
    });

    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        if (data === 'Success') {
            window.location.href = '/thankyou.html'; // Redirect to thankyou.html
        } else {
            alert('Something went wrong!');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong!');
    });

    console.log("Skills: " + formData.skills);
});
