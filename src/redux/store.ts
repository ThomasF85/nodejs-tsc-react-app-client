import {applyMiddleware, createStore, Store} from "redux";
import logger from 'redux-logger';
import gameReducer from "./game.reducer";
import {GameAction, GameState} from "./type";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

export const store: Store<GameState, GameAction> = createStore(gameReducer, applyMiddleware(...middlewares));