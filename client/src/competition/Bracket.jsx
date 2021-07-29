import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./Bracket.scss";

function Bracket(props) {
    const fourTeams = () => {
        return (
            <table className="bracket-table">
                <tbody>
                    <tr>
                        <td colSpan={6}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.winner.name}
                        </td>
                        <td colSpan={6}></td>
                    </tr>
                    <tr>
                        <td colSpan={6}></td>
                        <td className="bracket-line"></td>
                        <td colSpan={7}></td>
                    </tr>
                    <tr>
                        <td colSpan={3}></td>
                        <td colSpan={8} className="bracket-between score">
                            {props.rounds.matches.secondRound.teams[0].score}
                        </td>
                        <td colSpan={1} className="score">
                        {props.rounds.matches.secondRound.teams[1].score}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.secondRound.teams[0].name}
                        </td>
                        <td colSpan={6}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.secondRound.teams[1].name}
                        </td>
                        <td colSpan={2}></td>
                    </tr>
                    <tr>
                        <td colSpan={2}></td>
                        <td className="bracket-line"></td>
                        <td colSpan={7}></td>
                        <td className="bracket-line"></td>
                        <td colSpan={3}></td>
                    </tr>
                    <tr>
                        <td colSpan={1}></td>
                        <td colSpan={4} className="bracket-between score">
                            {props.rounds.matches.firstRound.teams[0].score}
                        </td>
                        <td colSpan={4} className="score">
                            {props.rounds.matches.firstRound.teams[1].score}
                        </td>
                        <td colSpan={4} className="bracket-between score">
                            {props.rounds.matches.firstRound.teams[2].score}
                            
                        </td>
                        <td colSpan={1} className="score">
                            {props.rounds.matches.firstRound.teams[3].score}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.firstRound.teams[0].name}
                        </td>
                        <td colSpan={2}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.firstRound.teams[1].name}
                        </td>
                        <td colSpan={2}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.firstRound.teams[2].name}
                        </td>
                        <td colSpan={2}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.firstRound.teams[3].name}
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }

    const eightTeams = () => {
        return (
            <table className="bracket-table">
                <tbody>
                <tr>
                        <td colSpan={14}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.winner.name}
                        </td>
                        <td colSpan={14}></td>
                    </tr>
                    <tr>
                        <td colSpan={14}></td>
                        <td className="bracket-line"></td>
                    </tr>
                    <tr>
                        <td colSpan={7}></td>
                        <td colSpan={16} className="bracket-between"></td>
                        <td colSpan={7}></td>
                    </tr>
                    <tr>
                        <td colSpan={6}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.secondRound.teams[0].name}
                        </td>
                        <td colSpan={14}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.secondRound.teams[1].name}
                        </td>
                        <td colSpan={6}></td>
                    </tr>
                    <tr>
                        <td colSpan={6}></td>
                        <td className="bracket-line"></td>
                        <td colSpan={15}></td>
                        <td className="bracket-line"></td>
                        <td colSpan={7}></td>
                    </tr>
                    <tr>
                        <td colSpan={3}></td>
                        <td colSpan={8} className="bracket-between"></td>
                        <td colSpan={8}></td>
                        <td colSpan={8} className="bracket-between"></td>
                        <td colSpan={3}></td>
                    </tr>
                    <tr>
                        <td colSpan={2}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.secondRound.teams[0].name}
                        </td>
                        <td colSpan={6}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.secondRound.teams[1].name}
                        </td>
                        <td colSpan={6}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.secondRound.teams[2].name}
                        </td>
                        <td colSpan={6}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.secondRound.teams[3].name}
                        </td>
                        <td colSpan={2}></td>
                    </tr>
                    <tr>
                        <td colSpan={2}></td>
                        <td className="bracket-line"></td>
                        <td colSpan={7}></td>
                        <td className="bracket-line"></td>
                        <td colSpan={7}></td>
                        <td className="bracket-line"></td>
                        <td colSpan={7}></td>
                        <td className="bracket-line"></td>
                        <td colSpan={3}></td>
                    </tr>
                    <tr>
                        <td colSpan={1}></td>
                        <td colSpan={4} className="bracket-between"></td>
                        <td colSpan={4}></td>
                        <td colSpan={4} className="bracket-between"></td>
                        <td colSpan={4}></td>
                        <td colSpan={4} className="bracket-between"></td>
                        <td colSpan={4}></td>
                        <td colSpan={4} className="bracket-between"></td>
                        <td colSpan={1}></td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.firstRound.teams[0].name}
                        </td>
                        <td colSpan={2}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.firstRound.teams[1].name}
                        </td>
                        <td colSpan={2}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.firstRound.teams[2].name}
                        </td>
                        <td colSpan={2}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.firstRound.teams[3].name}
                        </td>
                        <td colSpan={2}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.firstRound.teams[4].name}
                        </td>
                        <td colSpan={2}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.firstRound.teams[5].name}
                        </td>
                        <td colSpan={2}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.firstRound.teams[6].name}
                        </td>
                        <td colSpan={2}></td>
                        <td colSpan={2} className="bracket-team">
                            {props.rounds.matches.firstRound.teams[7].name}
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }


    if (props.rounds.numberOfTeams === 4) {
        return fourTeams();
    } else {
        return eightTeams();
    } 
}

export default Bracket;