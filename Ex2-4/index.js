import photoloader from "./lib/photoloader.js";
import ui from "./lib/ui.js";
import {link, linkPhotos, linkWithoutSlash} from "./lib/endpoints.js";

export let getPicture = async (id) => {
    let response = await photoloader.loadPicture(id);
    ui.displayPicture(response);
    let categorieObj = await getCategorie(response);
    ui.displayCategorie(categorieObj);
    let commentairesObj = await getCommentaires(response);
    ui.displayCommentaires(commentairesObj);
}

let getCategorie = async (imgData) => {
    let response = await photoloader.loadResource(linkWithoutSlash + imgData.links.categorie.href);
    return response.categorie;
}

let getCommentaires = async (imgData) => {
    let response = await photoloader.loadResource(linkWithoutSlash + imgData.links.comments.href);
    return response.comments;
}

export default {
    getCategorie,
    getCommentaires
}