import gallery_ui from "./lib/gallery_ui.js";
import gallery from "./lib/gallery.js";
import index from "./index.js";

let pageLink = "/www/canals5/phox/api/photos/";

let res = await gallery.load(pageLink);

let linkNextPage = res.links.next.href;
let linkPreviousPage = res.links.prev.href;
let linkFirstPage = res.links.first.href;
let linkLastPage = res.links.last.href;

let load_gallery_button = document.getElementById("load_gallery");
let next_page_button = document.getElementById("next_page");
let previous_page_button = document.getElementById("previous_page");
let first_page_button = document.getElementById("first_page");
let last_page_button = document.getElementById("last_page");

let gallery_container = document.getElementById("gallery_container")
let close_gallery = document.getElementById("close_gallery");

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

function activerAnimation(name, entity) {
    entity.classList.toggle(name);
    setTimeout(function() {
        countEl.classList.toggle(name);
    }, 500);
}

load_gallery_button.addEventListener("click", async function () {
    await load_gallery(pageLink);
    activerAnimation("slideUp", gallery_container);
});
next_page_button.addEventListener("click", async function () {
    await load_gallery(linkNextPage);
});
previous_page_button.addEventListener("click", async function () {
    await load_gallery(linkPreviousPage);
});

first_page_button.addEventListener("click", async function () {
    await load_gallery(linkFirstPage);
});

last_page_button.addEventListener("click", async function () {
    await load_gallery(linkLastPage);
});

gallery_container.addEventListener("click", async function (e) {
    if(e.target.tagName !== "IMG") return;
    let photoId = e.target.dataset.photoid;
    switchToGallery();
    await index.getPicture(photoId);
});

close_gallery.addEventListener("click", function () {
    console.log("clicked")
    switchToGallery();
});