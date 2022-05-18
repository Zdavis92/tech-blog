async function addPost() {
    const title = document.querySelector('#postTitle').value.trim();
    const body = document.querySelector('#postBody').value.trim();

    const response = await fetch('/post', {
        method: 'post',
        body: JSON.stringify({
            title,
            body
        }),
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#post-btn').addEventListener('click', addPost);