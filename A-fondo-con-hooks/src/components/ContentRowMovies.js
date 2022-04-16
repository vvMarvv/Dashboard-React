import React from 'react';
import Rowmovies from './RowMovies';

let data = [
    {
        titulo : "MOVIES IN DATA BASE",
        cifra : 21,
        color : "primary",
        icono : "fa-film"
    },
    {
        titulo : "TOTAL AWARDS",
        cifra : 79,
        color : "success",
        icono : "fa-award"
    },
    {
        titulo : "ACTORS QUANTITY",
        cifra : 49,
        color : "warning",
        icono : "fa-user"
    }
]


const Contentrowmovies = () => {
    return (
        <div className="row">
            {data.map((d, i) =>( <Rowmovies key={d.titulo + i} titulo={d.titulo} cifra={d.cifra} color={d.color} icono={d.icono}/>))}
            
        </div>
    );
}

export default Contentrowmovies;
