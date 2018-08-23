const argv = require('./config/yargs').argv;
const location = require('./location/location');

location.getLocationLatLng( argv.direccion )
    .then( resp => {
        console.log(resp);
    })
    .catch( err => console.log('ERRORR !!', err))
