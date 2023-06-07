import gallery from "./gallery.js";
import {link, linkWithoutSlash} from "./endpoints.js";

let display_gallery = async function (gal) {
    let gallery_div = document.getElementById("gallery_container");
    gallery_div.innerHTML = "";
    let res = gal;
    //console.log(res);
    //console.log(gal.links);
    //console.log(gal.photos[0].photo.thumbnail.href);
    for (let i = 0; i < res.photos.length; i++) {
        let photo = res.photos[i].photo;
        let realUrl = linkWithoutSlash + photo.thumbnail.href;
        console.log(realUrl);
        gallery_div.innerHTML += "<div class=\"vignette\">\n" +
            "                      <img data-photoId=\"" + photo.id + "\" src=\"" + realUrl + "\" alt=\"\">\n" +
            "                    </div>"
    }
    console.log(gal.links);
    return gal.links;
}

export default{
    display_gallery
}