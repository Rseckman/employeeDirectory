import React from 'react';

function TableRow (props) {
    return(
        <>
        <tr>
            <td><img src={props.icon} alt="contact image" className="border-bottom my-2" height="75" width="75"></img></td>
            <td>{props.name}</td>
            <td>{props.phoneNumber}</td>
            <td>{props.email}</td>
            <td>{props.DoB}</td>
          </tr>
        </>
    );
};

export default TableRow;