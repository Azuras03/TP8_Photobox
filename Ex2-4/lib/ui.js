import {link, linkPhotos} from "./endpoints.js";

let displayPicture = function (img) {
    let photo = document.getElementById("la_photo")
    let realUrl = link + img.photo.url.href;
    photo.innerHTML ="<img src=\"" + realUrl + "\" alt=\"\">\n" +
        "  <h2>titre : " + img.photo.titre + "</h2>\n" +
        "  <p>description : " + img.photo.descr + "</p>\n" +
        "  <p>type: " + img.photo.width + " x " + img.photo.height + "</p>\n" +
        "  <h4 id=\"la_categorie\">categorie : categorie de l'image</h4>\n" +
        "  <h4>commentaires : </h4>\n" +
        "  <ul id=\"les_commentaires\">\n" +
        "  </ul>"
}

let displayCategorie = function (categorie) {
    let cat = document.getElementById("la_categorie");
    cat.innerHTML = "categorie : " + categorie.nom;
}

let displayCommentaires = function (commentaires) {
    console.log(commentaires[1]);
    let com = document.getElementById("les_commentaires");
    com.innerHTML = "";
    for (let i = 0; i < commentaires.length; i++) {
        com.innerHTML += "<li>" + commentaires[i].pseudo + " : " + commentaires[i].content + "</li>";
    }
}

export default{
    displayPicture,
    displayCategorie,
    displayCommentaires
}