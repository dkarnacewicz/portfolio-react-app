import { createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
import reducers from 'reducers/index';
const logger = createLogger();

export default createStore(
    reducers,
    {},
    applyMiddleware(logger, thunk)
);