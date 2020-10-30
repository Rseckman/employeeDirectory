import React from 'react';

function TableHead (props) {
    return(
        <>
            <tr className="container">  
                <th >Icon</th>
                <th className="btn btn-secondary" onClick={() => {props.onSort()}}>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>DoB</th>
            </tr>
        </>
    );
};

export default TableHead;