const form = document.querySelector("form");
const successMessage = document.querySelector("#success-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    successMessage.textContent =
        "Thank you! Your commission request has been received. 🎨";

    form.reset();
});
function openArtwork(image) {
    const viewer = document.querySelector("#image-viewer");
    image.forEach(function(image) {
        image.addEventListener("click",function(){
        
    });
    const largeArtwork = document.querySelector("#large-artwork");

    largeArtwork.src = image.src;
    viewer.style.display = "flex";
}

function closeArtwork() {
    const viewer = document.querySelector("#image-viewer");

    viewer.style.display = "none";
}