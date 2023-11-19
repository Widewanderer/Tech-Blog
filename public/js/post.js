const { up } = require("inquirer/lib/utils/readline");
const updateButton = document.querySelector("#update-button");
const deleteButton = document.querySelector("#delete-button");
const title = document.querySelector("#post-title").value.trim();
const content = document.querySelector("#post-content").value.trim();

// Update post (not functional)
updateButton.addEventListener("click", async function (event) {
  const response = await fetch(`/api/post/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, content }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace(`/post/${id}`);
  } else {
    alert("Failed to update post");
  }
});
