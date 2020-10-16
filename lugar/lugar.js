const axios = require('axios');

const apiKey = 'f9cca48ec7b441b087f31322201610';

const getLugarLatLng = async (dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeUrl}`,
        headers: {}
    });

    const resp = await instance.get()

    if(resp.data.location.length==0){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.location
    const direccion = data.name
    const lat = data.lat
    const lng = data.lon

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}