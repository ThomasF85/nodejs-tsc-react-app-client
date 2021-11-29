import React from "react";
import "./tile.styles.css";
import {moveTile} from "../../redux/game.actions";
import {connect, ConnectedProps} from "react-redux";
import {GameState} from "../../redux/type";
import {selectCanMove} from "../../redux/game.selectors";
import {Dispatch} from "redux";

const Tile: React.FC<Props> = (props) => {
    const { value, canMove, moveTile } = props;
    const clickHandler: () => any = canMove ? () => moveTile(value) : () => {};
    const cssClass: string = `tile ${canMove ? " can-move" : " cannot-move"}`;

    return (
        <div onClick={clickHandler} className={cssClass}>{value}</div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    moveTile: (value: number) => dispatch(moveTile(value))
});

const mapStateToProps = (state: GameState, props: OwnProps) => ({
    canMove: selectCanMove(state, props),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type OwnProps = { value: number }

type Props = ConnectedProps<typeof connector> & OwnProps;

export default connector(Tile);