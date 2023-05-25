import photoloader from "./photoloader.js";
import {link, linkPhotos} from "./endpoints.js";

//A tester
export function load(){
    return new Promise((resolve, reject) => {
        photoloader.loadResource(link + "www/canals5/phox/api/photos").then((response) => {
            let gallery = [];
            response.Photos.forEach((element) => {
                gallery.push(element);
            });
            resolve(gallery);
            return gallery;
        }).catch((error) => {
            reject(error);
        });
    });
}

export default{
    load
}