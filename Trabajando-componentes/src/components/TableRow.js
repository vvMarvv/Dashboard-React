import React from 'react';

const Tablerow = (props) => {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.length}</td>
            <td>{props.rating}</td>
            <td>{props.genre}</td>
            <td>{props.award}</td>
        </tr>
    );
}

export default Tablerow;
