document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch('/users/register', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        alert('User registered successfully');
    } else {
        alert('Failed to register user');
    }
});
