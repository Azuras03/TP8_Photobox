

let loadPicture = function (idPicture) {
    fetch("https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos/" + idPicture, {
        credentials : "include"
    }).then(function (response) {
        if(response.ok) {
            let objReturn = {
                photo: {
                    id: response.photo.id,
                    titre: response.photo.titre,
                    description: response.photo.descr,
                    file: response.photo.file,
                    format: response.photo.format,
                    size: response.photo.size,
                    width: response.photo.width,
                    height: response.photo.height,
                    url: response.photo.url,
                },
                links: {
                    categorie: response.links.categorie,
                    comments: response.links.comments,
                }
            }
            return Promise.resolve(objReturn);
        } else {
            return Promise.reject("Erreur de chargement de la photo");
        }
    });
}

export {
    loadPicture
};