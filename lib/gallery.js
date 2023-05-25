import photoloader from "./photoloader.js";
import {link, linkPhotos} from "./endpoints.js";

//A tester
export function load(){
    return new Promise((resolve, reject) => {
        photoloader.loadResource(link).then((response) => {
            let gallery = [];
            response.forEach((element) => {
                gallery.push(element);
            });
            resolve(gallery);
            return gallery;
        }).catch((error) => {
            reject(error);
        });
    });
}