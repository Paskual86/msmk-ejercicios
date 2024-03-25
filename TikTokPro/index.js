const images = document.getElementsByClassName("edit-image");
const imageSelected = document.getElementById("image-upload");

for (const imgObj of images) {
    imgObj.addEventListener("click", () => {
        window.location.href = "./EditPhoto/Index.html";
    });
}

imageSelected.addEventListener("change", () => {
    const imagen = imageSelected.files[0];
    window.location.href = "./EditPhoto/Index.html";
});