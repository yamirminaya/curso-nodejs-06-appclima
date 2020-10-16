const axios = require('axios');

const apiKey = '8d3311715e4682c6a1e5283431328a29';

const getClima = async (lat, lng) => {

    const encodeLatUrl = encodeURI(lat);
    const encodeLngUrl = encodeURI(lng);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${encodeLatUrl}&lon=${encodeLngUrl}&lang=es&units=metric&appid=${apiKey}`,
    });

    const resp = await instance.get()

    if(resp.data.main.length==0){
        throw new Error(`No hay resultados...`);
    }

    const data = resp.data.main
    const temp = data.temp
    const humidity = data.humidity

    return {
        temp,
        humidity
    }
}

module.exports = {
    getClima
}