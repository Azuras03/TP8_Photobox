import photoloader from "./lib/photoloader.js";

let getPicture = async (id) => {
    let response = await photoloader.loadPicture(id);
    console.log(response.photo.titre);
    console.log(response.photo.url);
    console.log(response.photo.descr);
}

const pic = getPicture(105);
