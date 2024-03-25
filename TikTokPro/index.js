const images = document.getElementsByClassName("edit-image");

for (const imgObj of images) {
    imgObj.addEventListener("click", () => {
        window.location.href = "./EditPhoto/Index.html";
    });
}