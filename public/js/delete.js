async function deletePost() {
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(id)
  const newPost = await fetch(`/api/dashboard/${id}`, {
    method: "DELETE",
    body: JSON.stringify({ blogpost_id: id }),
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

document.querySelector(".yes").addEventListener("click", deletePost);
