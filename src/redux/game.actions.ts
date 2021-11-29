import {GameActionTypes} from "./game.types";
import {GameAction} from "./type";

export const moveTile = (ownValue: number): GameAction => ({
    type: GameActionTypes.MOVE,
    payload: ownValue
});

export const shuffle = (): GameAction => ({
    type: GameActionTypes.SHUFFLE
});