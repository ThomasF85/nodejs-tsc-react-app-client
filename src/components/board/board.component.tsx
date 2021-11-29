import React from "react";
import "./board.styles.css";
import Tile from "../tile/tile.component";
import {connect, ConnectedProps} from "react-redux";
import {GameState} from "../../redux/type";
import PlaceholderTile from "../placeholder-tile/placeholder-tile.component";
import {Dispatch} from "redux";
import {shuffle} from "../../redux/game.actions";
import {selectGameWon} from "../../redux/game.selectors";

const Board: React.FC<Props> = (props) => (
    <div className="board-container">
        <div>{`Board headline: ${props.headline}`}</div>
        <div>{`Game is finished: ${props.gameWon}`}</div>
        <button onClick={props.shuffle}>shuffle</button>
        <div className="board">
            {props.arrangement.map((value, index) => value === 0 ? <PlaceholderTile key={index} /> : <Tile key={index} value={value}/>)}
        </div>
    </div>
);

const mapStateToProps = (state: GameState) => ({
    arrangement: state.arrangement,
    gameWon: selectGameWon(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    shuffle: () => dispatch(shuffle())
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type OwnProps = { headline: string }

type Props = ConnectedProps<typeof connector> & OwnProps;

export default connector(Board);