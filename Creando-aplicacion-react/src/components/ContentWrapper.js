import React from 'react';
import Contentrowtop from './ContentRowTop';
import Footer from './Footer';
import Topbar from './TopBar';

const Contentwrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">

			<div id="content">
				<Topbar />
				<Contentrowtop />
			</div>

			<Footer />
		</div>
    );
}

export default Contentwrapper;
