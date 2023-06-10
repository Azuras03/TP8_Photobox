import gallery_ui from "./lib/gallery_ui.js";
import gallery from "./lib/gallery.js";
import index from "./index.js";

let pageLink = "/www/canals5/phox/api/photos/";

let res = await gallery.load(pageLink);

let linkNextPage = res.links.next.href;
let linkPreviousPage = res.links.prev.href;
let linkFirstPage = res.links.first.href;
let linkLastPage = res.links.last.href;

let load_gallery = async function (pageL) {
    let res = await gallery_ui.display_gallery(await gallery.load(pageL));
    pageLink = pageL;
    linkNextPage = res.next.href;
    linkPreviousPage = res.prev.href;
}

let switchToGallery = function () {
    let gallery = document.getElementById("photoScreen");
    if (gallery.classList.contains("hided")) {
        gallery.classList.remove("hided");
        gallery.classList.add("showed");
        return;
    }
    gallery.classList.remove("showed");
    gallery.classList.add("hided");
}

document.getElementById("load_gallery").addEventListener("click", async function () {
    await load_gallery(pageLink);
});
document.getElementById("next_page").addEventListener("click", async function () {
    await load_gallery(linkNextPage);
});
document.getElementById("previous_page").addEventListener("click", async function () {
    await load_gallery(linkPreviousPage);
});

document.getElementById("first_page").addEventListener("click", async function () {
    await load_gallery(linkFirstPage);
});

document.getElementById("last_page").addEventListener("click", async function () {
    await load_gallery(linkLastPage);
});

document.getElementById("gallery_container").addEventListener("click", async function (e) {
    if(e.target.tagName !== "IMG") return;
    let photoId = e.target.dataset.photoid;
    switchToGallery();
    await index.getPicture(photoId);
});

document.getElementById("close_gallery").addEventListener("click", function () {
    console.log("clicked")
    switchToGallery();
});