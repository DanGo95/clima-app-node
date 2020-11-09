const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=84b471cbb0a1c95c49039c1834231379&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}