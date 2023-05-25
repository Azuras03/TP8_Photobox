import photoloader from "./lib/photoloader.js";

function getPicture (id) {
    let image = photoloader.loadPicture(id);
    console.log(image.titre);
    console.log(image.type);
    console.log(image.url);
    return image;
}

const pic = getPicture(105);
console.log(pic);