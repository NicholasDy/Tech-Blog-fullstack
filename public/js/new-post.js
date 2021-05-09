async function newBlogPost(event) {
  event.preventDefault();
  let title = document.querySelector("#title").value;
  let content = document.querySelector("#content").value;

  if (title && content) {
    const newPost = await fetch("api/dashboard/new-post", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if(newPost.ok){
        document.location.replace('/dashboard');
    } else{
        alert(newPost.statusText);
    }
  }
}

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newBlogPost);
