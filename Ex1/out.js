(() => {
  // Ex1/lib/endpoints.js
  var linkPhotos = "https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos/";
  var link = "https://webetu.iutnc.univ-lorraine.fr/";
  var linkWithoutSlash = "https://webetu.iutnc.univ-lorraine.fr";

  // Ex1/lib/photoloader.js
  var loadPicture = async (idPicture) => {
    return await fetch(linkPhotos + idPicture, {
      credentials: "include"
    }).then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject("Erreur de chargement de la photo");
      }
    }).then(async function(response) {
      return response;
    });
  };
  var loadResource = async (url) => {
    return await fetch(url, {
      credentials: "include"
    }).then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject("Erreur de chargement");
      }
    }).then(async function(response) {
      return response;
    });
  };
  var photoloader_default = {
    loadPicture,
    loadResource
  };

  // Ex1/lib/ui.js
  var displayPicture = function(img) {
    let photo = document.getElementById("la_photo");
    let realUrl = link + img.photo.url.href;
    photo.innerHTML = ' <img src="' + realUrl + '" alt="">\n  <h2>titre : ' + img.photo.titre + "</h2>\n  <p>description : " + img.photo.descr + "</p>\n  <p>type: " + img.photo.width + " x " + img.photo.height + `</p>
  <h4 id="la_categorie">categorie : categorie de l'image</h4>
  <h4>commentaires : </h4>
  <ul id="les_commentaires">
  </ul>`;
  };
  var displayCategorie = function(categorie) {
    let cat = document.getElementById("la_categorie");
    cat.innerHTML = "categorie : " + categorie.nom;
  };
  var displayCommentaires = function(commentaires) {
    let com = document.getElementById("les_commentaires");
    com.innerHTML = "";
    for (let i = 0; i < commentaires.length; i++) {
      com.innerHTML += "<li>" + commentaires[i].pseudo + " : " + commentaires[i].content + "</li>";
    }
  };
  var ui_default = {
    displayPicture,
    displayCategorie,
    displayCommentaires
  };

  // Ex1/index.js
  var getPicture = async (id) => {
    let response = await photoloader_default.loadPicture(id);
    ui_default.displayPicture(response);
    let categorieObj = await getCategorie(response);
    ui_default.displayCategorie(categorieObj);
    let commentairesObj = await getCommentaires(response);
    ui_default.displayCommentaires(commentairesObj);
  };
  var getCategorie = async (imgData) => {
    let response = await photoloader_default.loadResource(linkWithoutSlash + imgData.links.categorie.href);
    return response.categorie;
  };
  var getCommentaires = async (imgData) => {
    let response = await photoloader_default.loadResource(linkWithoutSlash + imgData.links.comments.href);
    return response.comments;
  };
  getPicture(105);
  var Ex1_default = {
    getPicture,
    getCategorie,
    getCommentaires
  };
})();
