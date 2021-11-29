import {createSelector, ParametricSelector, Selector} from "reselect";
import {GameState} from "./type";

export const selectCanMove: ParametricSelector<GameState, { value: number }, boolean> = createSelector(
    [state => state.arrangement, (state, props) => props.value],
    (arrangement, value) => {
        const ownIndex: number = arrangement.indexOf(value);
        const zeroIndex: number = arrangement.indexOf(0);
        if (zeroIndex - ownIndex === 4 || ownIndex - zeroIndex === 4) {
            return true;
        }
        if (ownIndex % 4 < 3 && zeroIndex === ownIndex + 1) {
            return true;
        }
        if (ownIndex % 4 > 0 && zeroIndex === ownIndex - 1) {
            return true;
        }
        return false;
    }
)

export const selectGameWon: Selector<GameState, boolean> = createSelector(
    [state => state.arrangement],
    (arrangement) => {
        for (let i = 0; i < 15; i++) {
            if (arrangement[i] !== i + 1) {
                return false;
            }
        }
        return true;
    }
)