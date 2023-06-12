import gallery_ui from "./lib/gallery_ui.js";
import gallery from "./lib/gallery.js";
import {getPicture} from "./index.js";

let pageLink = "/www/canals5/phox/api/photos/";

let res = gallery.load(pageLink);

let linkNextPage = "";
let linkPreviousPage = "";
let linkFirstPage = "";
let linkLastPage = "";

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
    linkFirstPage = res.first.href;
    linkLastPage = res.last.href;
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
        entity.classList.toggle(name);
    }, 500);
}

load_gallery_button.addEventListener("click", async function () {
    await load_gallery(pageLink);
    activerAnimation("slideUp", gallery_container);
});
next_page_button.addEventListener("click", async function () {
    await load_gallery(linkNextPage);
    activerAnimation("slideRight", gallery_container);
});
previous_page_button.addEventListener("click", async function () {
    await load_gallery(linkPreviousPage);
    activerAnimation("slideLeft", gallery_container);
});

first_page_button.addEventListener("click", async function () {
    await load_gallery(linkFirstPage);
    activerAnimation("slideFirst", gallery_container);
});

last_page_button.addEventListener("click", async function () {
    await load_gallery(linkLastPage);
    activerAnimation("slideLast", gallery_container);
});

gallery_container.addEventListener("click", async function (e) {
    if(e.target.tagName !== "IMG") return;
    let photoId = e.target.dataset.photoid;
    switchToGallery();
    await getPicture(photoId);
});

close_gallery.addEventListener("click", function () {
    switchToGallery();
});