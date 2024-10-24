

function allImages() {
    const images = document.querySelectorAll('#photos_procces_work img');
    images.forEach((image) => {
        console.log(image)
        image.style.visibility = "visible";
    });
}




