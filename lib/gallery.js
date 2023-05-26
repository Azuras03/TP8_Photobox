import photoloader from "./photoloader.js";
import {link, linkPhotos} from "./endpoints.js";

async function load(page) {
    let linkPage = link + "www/canals5/phox/api/photos?page=" + page;
    console.log(linkPage);
    return await photoloader.loadResource(linkPage).then(async function (response) {
        return response;
    });
}

export default{
    load,
}