async function addComment(event) {
    event.preventDefault();

    const comment_text = document.querySelector('#newCommentfield').value.trim();
    const postId = window.location.toString().split('/')[window.location.toString().split('/').length -1];

    if (comment_text) {
        const response = await fetch(`/comment/${postId}`, {
            method: 'post',
            body: JSON.stringify({ comment_text }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#comment-btn').addEventListener('click', addComment);