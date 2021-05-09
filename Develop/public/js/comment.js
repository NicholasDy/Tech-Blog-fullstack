async function createComment(event) {
  event.preventDefault();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  let comment = document.querySelector("#content").value.trim();
  if (comment) {
    const newPost = await fetch(`/api/dashboard/comment`, {
      method: "POST",
      body: JSON.stringify({ id, comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (newPost.ok) {
      document.location.replace(`/dashboard/${id}`);
    } else {
      alert(newPost.statusText);
    }
  }
}

document
  .querySelector("#comment-form")
  .addEventListener("submit", createComment);
