const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encondedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${ encondedUrl }&key=ac809805cc324b798c09164b884cc0c6&language=es`
    });

    const resp = await instance.get();

    if (resp.data.results.length === 0) {
        throw new Error(`No hay resultado para ${ dir }`);
    }

    const data = resp.data.results[0];
    const direccion = data.formatted;
    const lat = data.geometry.lat;
    const lng = data.geometry.lng;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}