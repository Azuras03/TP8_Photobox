import gallery_ui from "./lib/gallery_ui.js";
import gallery from "./lib/gallery.js";

let page = 0;

let load_gallery = async function () {
    await gallery.load(page);
    await gallery_ui.display_gallery(gallery);
}

load_gallery();