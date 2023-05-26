import gallery_ui from "./lib/gallery_ui.js";
import gallery from "./lib/gallery.js";

let page = 0;

document.getElementById("load_gallery").addEventListener("click", async function () {
    await load_gallery();
});
document.getElementById("next_page").addEventListener("click", async function () {
    page++;
    await load_gallery();
});
document.getElementById("previous_page").addEventListener("click", async function () {
    page--;
    await load_gallery();
});

let load_gallery = async function () {
    await gallery_ui.display_gallery(await gallery.load(page));
}