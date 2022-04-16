import React, { Component } from 'react';
import Genre  from './Genre';

class GenresInDb extends Component{
    constructor(){
        super()
        this.state ={
            genresList : []
        }
    }

    titleOver(){
        let box = document.querySelector('#box')

        box.classList.toggle('bg-secondary')
        
        
    }

    async componentDidMount(){
        try {
            let response = await fetch('http://localhost:3001/api/genres') 
            let result = await response.json()
            
            this.setState({
                genresList : result.data
            })
        } catch (error) {
            console.log(error)
        }
        console.log(this.state)
    }
    render(){
        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={()=> this.titleOver()}>Genres in Data Base</h6>
                            </div>
                            <div className="card-body" id='box'>
                                <div className="row">
                                    {
                                        this.state.genresList.map((genre,index)=>{
                                            return  <Genre  {...genre}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            
            </React.Fragment>
        )
    }
}
export default GenresInDb;