const argv = require('./config/yargs').argv;

const axios = require('axios');

let encondedUrl = encodeURI( argv.direccion );

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondedUrl}&key=AIzaSyDKxdzslhNCRCh2KSNID5UgKGjaVGYfa9I`)
    .then( resp => {

        let location = resp.data.results[0];
        let coords = location.geometry.location;

        console.log(location.formatted_address, coords);
    })
    .catch( err => console.log('ERRORRR !!!!', e));

console.log(argv.direccion);