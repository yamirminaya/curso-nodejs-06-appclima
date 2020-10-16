const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Dirección de la ciudad para obtener el clima',
        demand:true
    }
}).argv;

const getInfo = async (direccion)=>{
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${direccion} es de ${temp.temp}.`
    }
    catch(e){
        return `No se pudo determinar el clima de ${direccion}`
    }
};

getInfo(argv.direccion)
.then(console.log)
.catch(console.log)

// lugar.getLugarLatLng(argv.direccion)
// .then(console.log);

// clima.getClima( -12.05,  -77.05)
// .then(console.log);