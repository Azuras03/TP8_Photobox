import photoloader from "./lib/photoloader.js";
import ui from "./lib/ui.js";

let getPicture = async (id) => {
    let response = await photoloader.loadPicture(id);
    console.log(response.photo.titre);
    console.log(response.photo.url);
    console.log(response.photo.descr);
}

getPicture(105);
ui.displayPicture(await photoloader.loadPicture(105));