import React from 'react';

const Movie = (props) => {
    return (
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={props.image} alt=" Star Wars - Mandalorian " />
            </div>
            <p>{props.desc}</p>
            <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
        </div>
    );
}

export default Movie;
