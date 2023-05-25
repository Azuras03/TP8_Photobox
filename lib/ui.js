let displayPicture = function (img) {
    let photo = document.getElementById("la_photo")
    let realUrl = "https://webetu.iutnc.univ-lorraine.fr" + img.photo.url.href;
    photo.innerHTML = "<p>" + img.photo.titre + "</p>";
    photo.innerHTML += "<img src=\"" + realUrl + "\" alt=\"" + img.photo.titre + "\" title=\"" + img.photo.titre + "\" /> <br />";
    photo.innerHTML += "<p>" + img.photo.descr + "</p>";

}

export default{
    displayPicture
}