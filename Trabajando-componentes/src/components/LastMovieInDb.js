import React from 'react';
import Movie from './Movie';
let data = {
    image : "assets/images/mandalorian.jpg",
    descr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?"
}
const Lastmovieindb = () => {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
                </div>
                <Movie image={data.image} desc={data.descr}/>
            </div>
        </div>
    );
}

export default Lastmovieindb;
