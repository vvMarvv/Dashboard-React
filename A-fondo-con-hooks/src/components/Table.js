import React from 'react';
import Tablerow from './TableRow';
let data = [
    {
        title : "Billy Elliot",
        length : 123,
        rating : 5,
        genres : ["Drama","Comedia"],
        awards : 2
    },
    {
        title : "Alicia en el país de las maravillas",
        length : 142,
        rating : 4.8,
        genres : ["Drama","Acción","Comedia"],
        awards : 3
    },
]
const Table = () => {
    return (
        <div className='container'>
            <table className="table content">
                <thead>
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Duración</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Género</th>
                        <th scope="col">Premios</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((info, i) => (
                        <Tablerow key={info.title + i} title={info.title} length={info.length} rating={info.rating} genre={info.genres} award={info.awards}/>
                    ))}
                   
                </tbody>
            </table>
        </div>
    );
}

export default Table;
