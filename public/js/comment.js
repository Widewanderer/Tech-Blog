const commentButton = document.querySelector("#comment-button");
const commentSubmit = document.querySelector("#submit-button");
const commentForm = document.querySelector("#comment-form");
const commentSection = document.querySelector("#comment-section");

commentButton.addEventListener("click", function () {
  commentSection.classList.toggle("hide");
});



commentSubmit.addEventListener("click", async function (event) { 
const content = commentForm.value.trim();
const post_id = commentForm.getAttribute("data-post_id");
// send fetch to comment js wt info above content and post_id 
});
