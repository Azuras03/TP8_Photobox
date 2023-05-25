import photoloader from "./lib/photoloader.js";

function getPicture (id){
    let image = loadPicture(id);
    console.log(image.titre);
    console.log(image.type);
    console.log(image.url);

}

//const getPicture = getPicture(105);