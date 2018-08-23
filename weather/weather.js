const axios = require('axios');

const getClima = async (lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=bd6cf09e7dc29a422c7742b1e753f1d8`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}