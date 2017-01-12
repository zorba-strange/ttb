const React                           = require('react');
const ReactDOM                        = require('react-dom');
const {
    createStore,
    applyMiddleware
}                                     = require('redux');
const {Provider}                      = require('react-redux');
const ReduxThunk                      = require('redux-thunk').default;

const ttbApp                          = require('./ttb_state/reducers/all_reducers');
const App                             = require('./ttb_components/App');

const fetchData                       = require('./ttb_state/actions/ajax_actions');


const store = createStore(
    ttbApp,
    applyMiddleware(ReduxThunk),
)

ReactDOM.render(
    <Provider 
        store={store}>
          <App />
    </Provider>,
  document.getElementById('root')
);

store.dispatch(fetchData())
console.log(store.getState());

    
