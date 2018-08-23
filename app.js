const argv = require('./config/yargs').argv;
const location = require('./location/location');
const weather = require('./weather/weather');

let getInfo = async ( address ) => {
    try{

        let coords = await location.getLocationLatLng( address );
        let temp = await weather.getClima(coords.lat, coords.lng);

        
        return `El clima en ${coords.address} es de ${temp}`

    } catch ( e ) {
        return 'No se pudo determinar el clima por ' + e;
    }
}

getInfo( argv.direccion )
    .then( mensaje => console.log(mensaje))
    .catch( err => console.log(err));



