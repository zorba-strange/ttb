const {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    DATA_NOT_FOUND,
    DATA_REQUEST,
    DATA_RECEIVE,
}                                             = require('../actions/ttb_constants');


const requestData = (data) => {
    console.log(JSON.parse(data.text));
    data = JSON.parse(data.text);
    console.log(data.results[0].bills);
    return {
        type: FETCH_DATA_SUCCESS,
        data: JSON.parse(data.text)
    }
}

const fetchDataNotFound = (data) => {
    return {
        type: DATA_NOT_FOUND,
        data,
    }
}

const receiveData = (data, json) => {
    return {
        type: DATA_RECEIVE,
        data,
        receivedAt: Date.now()
    }
}


module.exports = {
    requestData,
    fetchDataNotFound,
    receiveData,
}
