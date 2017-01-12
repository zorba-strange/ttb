const {
    MAKE_REQUEST
}                                     = require('./ttb_constants');

const makeRequest = (request) => {
    console.log('request');
    return {
        type: MAKE_REQUEST,
        request
    }
}

module.exports = makeRequest;
