const title = document.getElementById("Title");
const content = document.getElementById("Content");
const button = document.getElementById("button")
let blogID = 1;
const blogPoster = () => {
    const blog = blogID;
    blog = {
        title: title,
        content: content
    }
    blogID++;
}
button.addEventListener("click",blogPoster);
