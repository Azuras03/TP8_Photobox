import photoloader from "./lib/photoloader.js";
import ui from "./lib/ui.js";
import {link, linkPhotos, linkWithoutSlash} from "./lib/endpoints.js";

let getPicture = async (id) => {
    let response = await photoloader.loadPicture(id);
    ui.displayPicture(response);
    let categorieObj = await getCategorie(response);
    ui.displayCategorie(categorieObj);
    let commentairesObj = await getCommentaires(response);
    ui.displayCommentaires(commentairesObj);
}

let getCategorie = async (imgData) => {
    console.log(imgData.links.categorie.href)
    let response = await photoloader.loadResource(linkWithoutSlash + imgData.links.categorie.href);
    console.log(response.categorie);
    return response.categorie;
}

let getCommentaires = async (imgData) => {
    let response = await photoloader.loadResource(linkWithoutSlash + imgData.links.comments.href);
    console.log(response.comments);
    return response.comments;
}

getPicture(105);

export default {
    getPicture,
    getCategorie,
    getCommentaires
}