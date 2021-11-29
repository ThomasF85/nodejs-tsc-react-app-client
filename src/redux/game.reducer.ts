import {GameActionTypes} from "./game.types";
import {INITIAL_STATE, moveOwnValue, shuffle} from "./game.utils";
import {GameAction, GameState} from "./type";

const gameReducer = (state = INITIAL_STATE, action: GameAction): GameState => {
    switch (action.type) {
        case GameActionTypes.MOVE:
            return {
                ...state,
                arrangement: moveOwnValue(action.payload, state.arrangement),
            }
        case GameActionTypes.SHUFFLE:
            return {
                ...state,
                arrangement: shuffle(),
            }
        default:
            return state;
    }
}

export default gameReducer;