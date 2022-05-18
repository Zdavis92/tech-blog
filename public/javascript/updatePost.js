const postId = window.location.toString().split('/')[window.location.toString().split('/').length -1];

async function updatePost() {
    const title = document.querySelector('#postTitle').value.trim();
    const body = document.querySelector('#postBody').value.trim();

    const response = await fetch(`/post/${postId}`, {
        method: 'put',
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

async function deletePost() {
    const response = await fetch(`/post/${postId}`,{method: 'delete'})

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#updatePost-btn').addEventListener('click', updatePost);
document.querySelector('#deletePost-btn').addEventListener('click', deletePost);