const request                                = require('superagent');
const { requestData }                            = require('./fetch_data_actions');

const {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    DATA_NOT_FOUND,
    DATA_REQUEST,
    DATA_RECEIVE,
}                                             = require('../actions/ttb_constants');

const fetchData = () => {
    return (dispatch) => {
        console.log('request set');
        return request
        .get("https://api.propublica.org/congress/v1/114/house/bills/introduced.json")
        .accept('json')
        .set('X-API-Key', 'NENw3m9erC4wUsUs28lIn23MdxRyq5I95ydBAX9C')
        .end((err, res) => {
                err ? console.log(err) : dispatch(requestData(res));
            });
    }
}


module.exports = fetchData;
