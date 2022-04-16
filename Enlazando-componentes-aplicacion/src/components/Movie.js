import React, { Component } from 'react';


import Row from './row';

class Movie extends Component{
	constructor(){
		super()
		this.state = {
			movies : []
		}
	}

	guardar = (data)=>{
		this.setState({
			movies : data.data
		})
	}

	async apiCall(guardar){
		try {
			let response = await fetch('http://localhost:3001/api/movies')
			let result = await response.json()
			guardar(result)
		} catch (error) {
			console.log(error)
		}
	}

	componentDidMount(){
		this.apiCall(this.guardar)
	}

	render(){
		return(
			<React.Fragment>
						{/*<!-- PRODUCTS LIST -->*/}
						<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
						
						{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
										<thead>
											<tr>
												<th>Id</th>
												<th>Titulo</th>
												<th>Calificación</th>
												<th>Premios</th>
												<th>Duración</th>
											</tr>
										</thead>
										<tfoot>
											<tr>
												<th>Id</th>
												<th>Titulo</th>
												<th>Calificación</th>
												<th>Premios</th>
												<th>Duración</th>
											</tr>
										</tfoot>
										<tbody>
											{this.state.movies.map((movie, i)=>(
												<Row key={i} {...movie} />
											))}
											
										</tbody>
									</table>
								</div>
							</div>
						</div>            
			</React.Fragment>
		)
	}
}
export default Movie;