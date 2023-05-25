import load from "./gallery.js";

let display_gallery = function (gallery) {
    let gallery_div = document.getElementById("gallery-container");
    gallery_div.innerHTML = "";
    for (let i = 0; i < gallery.length; i++) {
        let realUrl = link + gallery[i].links.self.href;

    }
}