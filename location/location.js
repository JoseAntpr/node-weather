const axios = require('axios');

const getLocationLatLng = async ( address ) => {

    let encondedUrl = encodeURI( address );

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondedUrl}&key=AIzaSyBKBnPhlIEHuA1qPbmaKKePTf32fSuky74`);
    if( resp.data.status === 'ZERO_RESULTS') {
        throw new Error( 'No hay resultados para la ciudad');
    } else if ( resp.data.status === 'OVER_QUERY_LIMIT' ) {
        throw new Error( 'API KEY EXCEDIDO');
    }

    let location = resp.data.results[0];
    let coords = location.geometry.location;

    return {
        address: location.formatted_address,
        lag: coords.lat,
        lng: coords.lng
    }

}

module.exports = {
    getLocationLatLng
}
