const Immutable                              = require('immutable');

const {
   FETCH_DATA_REQUEST,
   FETCH_DATA_SUCCESS,
   FETCH_DATA_FAILURE,
   DATA_RECEIVE
}                                             = require('../actions/ttb_constants');


const InitialState  = Immutable.fromJS({});

const postData = (state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
}, action) => {
    switch (action.type) {
        case FETCH_DATA_FAILURE:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case FETCH_DATA_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            })
        case FETCH_DATA_SUCCESS:
            console.log(action)
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action,
                lastUpdated: action.receivedAt
            })
        case DATA_RECEIVE:
            return action.data.text
        default:
            return state
    }
};

module.exports = postData;
        
            
