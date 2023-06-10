(() => {
  // lib/endpoints.js
  var linkPhotos = "https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos/";
  var link = "https://webetu.iutnc.univ-lorraine.fr/";
  var linkWithoutSlash = "https://webetu.iutnc.univ-lorraine.fr";

  // lib/photoloader.js
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

  // lib/gallery.js
  async function load(paramLink) {
    let linkPage = linkWithoutSlash + paramLink;
    console.log(linkPage);
    return await photoloader_default.loadResource(linkPage).then(async function(response) {
      return response;
    });
  }
  var gallery_default = {
    load
  };

  // lib/gallery_ui.js
  var display_gallery = async function(gal) {
    let gallery_div = document.getElementById("gallery_container");
    gallery_div.innerHTML = "";
    let res2 = gal;
    for (let i = 0; i < res2.photos.length; i++) {
      let photo = res2.photos[i].photo;
      let realUrl = linkWithoutSlash + photo.thumbnail.href;
      console.log(realUrl);
      gallery_div.innerHTML += '<div class="vignette">\n                      <img data-photoId="' + photo.id + '" src="' + realUrl + '" alt="">\n                    </div>';
    }
    console.log(gal.links);
    return gal.links;
  };
  var gallery_ui_default = {
    display_gallery
  };

  // lib/ui.js
  var displayPicture = function(img) {
    let photo = document.getElementById("la_photo");
    let realUrl = link + img.photo.url.href;
    photo.innerHTML = "<h2>titre : " + img.photo.titre + '</h2>\n  <img src="' + realUrl + '" alt="">\n  <p>description : ' + img.photo.descr + "</p>\n  <p>type: " + img.photo.width + " x " + img.photo.height + `</p>
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
    console.log(commentaires[1]);
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

  // index.js
  var getPicture = async (id) => {
    let response = await photoloader_default.loadPicture(id);
    ui_default.displayPicture(response);
    let categorieObj = await getCategorie(response);
    ui_default.displayCategorie(categorieObj);
    let commentairesObj = await getCommentaires(response);
    ui_default.displayCommentaires(commentairesObj);
  };
  var getCategorie = async (imgData) => {
    console.log(imgData.links.categorie.href);
    let response = await photoloader_default.loadResource(linkWithoutSlash + imgData.links.categorie.href);
    console.log(response.categorie);
    return response.categorie;
  };
  var getCommentaires = async (imgData) => {
    let response = await photoloader_default.loadResource(linkWithoutSlash + imgData.links.comments.href);
    console.log(response.comments);
    return response.comments;
  };
  var Ex2_4_default = {
    getPicture,
    getCategorie,
    getCommentaires
  };

  // photobox.js
  var pageLink = "/www/canals5/phox/api/photos/";
  var res = gallery_default.load(pageLink);
  var linkNextPage = "";
  var linkPreviousPage = "";
  var linkFirstPage = "";
  var linkLastPage = "";
  var load_gallery_button = document.getElementById("load_gallery");
  var next_page_button = document.getElementById("next_page");
  var previous_page_button = document.getElementById("previous_page");
  var first_page_button = document.getElementById("first_page");
  var last_page_button = document.getElementById("last_page");
  var gallery_container = document.getElementById("gallery_container");
  var close_gallery = document.getElementById("close_gallery");
  var load_gallery = async function(pageL) {
    let res2 = await gallery_ui_default.display_gallery(await gallery_default.load(pageL));
    pageLink = pageL;
    linkNextPage = res2.next.href;
    linkPreviousPage = res2.prev.href;
    linkFirstPage = res2.first.href;
    linkLastPage = res2.last.href;
  };
  var switchToGallery = function() {
    let gallery = document.getElementById("photoScreen");
    if (gallery.classList.contains("hided")) {
      gallery.classList.remove("hided");
      gallery.classList.add("showed");
      return;
    }
    gallery.classList.remove("showed");
    gallery.classList.add("hided");
  };
  function activerAnimation(name, entity) {
    entity.classList.toggle(name);
    setTimeout(function() {
      entity.classList.toggle(name);
    }, 500);
  }
  load_gallery_button.addEventListener("click", async function() {
    await load_gallery(pageLink);
    activerAnimation("slideUp", gallery_container);
  });
  next_page_button.addEventListener("click", async function() {
    await load_gallery(linkNextPage);
  });
  previous_page_button.addEventListener("click", async function() {
    await load_gallery(linkPreviousPage);
  });
  first_page_button.addEventListener("click", async function() {
    await load_gallery(linkFirstPage);
  });
  last_page_button.addEventListener("click", async function() {
    await load_gallery(linkLastPage);
  });
  gallery_container.addEventListener("click", async function(e) {
    if (e.target.tagName !== "IMG")
      return;
    let photoId = e.target.dataset.photoid;
    switchToGallery();
    await Ex2_4_default.getPicture(photoId);
  });
  close_gallery.addEventListener("click", function() {
    console.log("clicked");
    switchToGallery();
  });
})();
