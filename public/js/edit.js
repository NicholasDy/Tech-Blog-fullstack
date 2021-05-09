async function editPost(event) {
  event.preventDefault();
  let title = document.querySelector("#title").value.trim();
  let content = document.querySelector("#content").value.trim();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (title && content) {
    const newPost = await fetch(`/api/dashboard/${id}`, {
      method: "PUT",
      body: JSON.stringify({ blogpost_id: id, title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (newPost.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(newPost.statusText);
    }
  }
}

document.querySelector("#edit-post-form").addEventListener("submit", editPost);
