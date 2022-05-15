async function createUser(event) {
    event.preventDefult();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/dashboard/user', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            const newUser = response.json();
            console.log(newUser)
        } else {
            alert(response.statusText)
        }
    }
};

document.querySelector('#signup-btn').addEventListener('click', createUser);