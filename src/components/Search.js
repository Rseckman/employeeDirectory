import React from 'react';

function Search (props) {
    return (
        <>
        <form className="form-inline my-2 my-lg-0 row justify-content-md-center py-4">
            <input onChange={props.inputChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </>

    );
};

export default Search;