import {loadPicture} from "./photoloader";

function getPicture (id){
    let image = loadPicture(id);
    console.log(image.titre);
    console.log(image.type);
    console.log(image.url);

}