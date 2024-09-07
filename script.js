document.querySelectorAll('.role-btn').forEach(button => {
    button.addEventListener('click', function() {
        const role = this.getAttribute('data-role');
        const roleOptions = document.getElementById('role-options');
        roleOptions.innerHTML = ''; // Clear previous options

        if (role === 'student') {
            roleOptions.innerHTML = `
                <button class="role-option-btn">K12</button>
                <button class="role-option-btn">Undergraduate</button>
                <button class="role-option-btn">Postgraduate</button>
            `;
        } else if (role === 'teacher') {
            roleOptions.innerHTML = `
                <button class="role-option-btn">Primary School</button>
                <button class="role-option-btn">Secondary School</button>
                <button class="role-option-btn">University</button>
            `;
        } else if (role === 'parent') {
            roleOptions.innerHTML = `
                <button class="role-option-btn">View Progress</button>
                <button class="role-option-btn">Manage Account</button>
            `;
        }
    });
});

document.querySelector('.subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Subscription form submitted');
});

document.querySelector('.signin-btn').addEventListener('click', function() {
    alert('Sign In button clicked');
});
