import photoloader from "./photoloader.js";
import {link, linkPhotos} from "./endpoints.js";

let gallery = [];

async function load(page) {
    return await photoloader.loadResource(link + "www/canals5/phox/api/photos?page=" + page).then(async function (response) {
        gallery = response;
        return response;
    });
}

export default{
    load,
    gallery
}