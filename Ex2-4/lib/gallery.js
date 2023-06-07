import photoloader from "./photoloader.js";
import {link, linkWithoutSlash, linkPhotos} from "./endpoints.js";

async function load(paramLink) {
    let linkPage = linkWithoutSlash + paramLink;
    console.log(linkPage);
    return await photoloader.loadResource(linkPage).then(async function (response) {
        return response;
    });
}

export default{
    load,
}