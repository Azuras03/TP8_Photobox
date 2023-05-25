let loadPicture = async (idPicture) => {
    return await fetch("https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos/" + idPicture, {
        credentials : "include"
    }).then(function (response) {
        if(response.ok) {
            return response.json();
        } else {
            return Promise.reject("Erreur de chargement de la photo");
        }
    }).then(async function (response) {
        return response;
    });
}

export default {
    loadPicture
};
