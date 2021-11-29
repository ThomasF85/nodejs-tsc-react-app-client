import {GameState} from "./type";

export const INITIAL_STATE: GameState = {
    arrangement: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]
}

export const moveOwnValue = (ownValue: number, arrangement: number[]): number[] => {
    const newArrangement = [];
    const indexOfOwnValue = arrangement.indexOf(ownValue);
    const indexOfZeroValue = arrangement.indexOf(0);
    for (let i = 0; i < arrangement.length; i++) {
        if (i === indexOfOwnValue) {
            newArrangement.push(0);
        } else if (i === indexOfZeroValue) {
            newArrangement.push(ownValue);
        } else {
            newArrangement.push(arrangement[i]);
        }
    }
    return newArrangement;
}

const getMoveableValues = (arrangement: number[]) : number[] => {
    const moveableValues: number[] = [];
    const indexOfZeroValue = arrangement.indexOf(0);
    if (indexOfZeroValue > 3) {
        moveableValues.push(arrangement[indexOfZeroValue - 4]);
    }
    if (indexOfZeroValue < 12) {
        moveableValues.push(arrangement[indexOfZeroValue + 4]);
    }
    if (indexOfZeroValue % 4 > 0) {
        moveableValues.push(arrangement[indexOfZeroValue - 1]);
    }
    if (indexOfZeroValue % 4 < 3) {
        moveableValues.push(arrangement[indexOfZeroValue + 1]);
    }
    return moveableValues;
}

const getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const shuffle = (): number[] => {
    let arrangement: number[] = INITIAL_STATE.arrangement.slice();
    let lastMovedValue: number = 0;
    for (let i = 0; i < 200; i++) {
        const possibleValues: number[] = getMoveableValues(arrangement);
        let valueToShuffle: number = possibleValues[getRandomInt(0, possibleValues.length - 1)];
        while (valueToShuffle === lastMovedValue) {
            valueToShuffle = possibleValues[getRandomInt(0, possibleValues.length - 1)];
        }
        lastMovedValue = valueToShuffle;
        arrangement = moveOwnValue(valueToShuffle, arrangement);
    }
    return arrangement;
}