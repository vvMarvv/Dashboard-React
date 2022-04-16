import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import ContentRowMovies from './ContentRowMovies';
import Lastmovie from './LastMovie';
import GenresInDb from './GenresInDb';
import NotFound from './NotFound';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          
          <Routes>
            
            <Route path='/dashboard' element={<ContentWrapper />} />
            <Route path='/dashboard/metrics' element={<ContentRowMovies />}/>
            <Route path='/dashboard/last-movie' element={<Lastmovie />}/>
			      <Route path='/dashboard/genres-in-db' element={<GenresInDb />}/>
			      <Route path='*' element={<NotFound />}/>
          </Routes>
          
        </div>
    </React.Fragment>
  );
}

export default App;
