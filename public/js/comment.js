const commentButton = document.querySelector("#comment-button");
const commentSubmit = document.querySelector("#submit-button");
const commentForm = document.querySelector("#comment-form");
const commentHide = document.querySelector("#comment-hide");

commentButton.addEventListener("click", function () {
  commentHide.classList.toggle("hide");
});

commentSubmit.addEventListener("click", async function (event) {
  const content = commentForm.value.trim();
  const post_id = commentForm.getAttribute("data-post_id");
  // send fetch to comment js wt info above content and post_id
  if (content) {
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({ content, post_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert("Failed to create comment");
    }
  }
});
