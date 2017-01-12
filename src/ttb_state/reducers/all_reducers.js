const Immutable                              = require('immutable');
const { combineReducers }                    = require('redux'); 
const postData                               = require('./fetch_data_reducer');



const ttbApp = combineReducers({
    postData,
});


module.exports = ttbApp
