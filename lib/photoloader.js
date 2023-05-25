import {link, linkPhotos} from "./endpoints.js";
let loadPicture = async (idPicture) => {
    return await fetch(linkPhotos + idPicture, {
        credentials : "include"
    }).then(function (response) {
        if(response.ok) {
            return response.json();
        } else {
            return Promise.reject("Erreur de chargement de la photo");
        }
    }).then(async function (response) {
        return response;
    });
}

let loadResource = async (url) => {
    return await fetch(url, {
        credentials : "include"
    }).then(function (response) {
        if(response.ok) {
            return response.json();
        } else {
            return Promise.reject("Erreur de chargement");
        }
    }).then(async function (response) {
        return response;
    });
}

export default {
    loadPicture,
    loadResource
};
