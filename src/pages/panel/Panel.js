import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Asidebar from '../../components/Asidebar';
import Dashboard from '../../pages/panel/Dashboard';
import Footer from '../../components/Footer';

const Panel = props => {
    return (
        <div className='wrapper'>
            <Router>
                <Navbar {...props} />
                <Asidebar />
                <div class="content-wrapper">
                    <Route path='/panel' exact component={Dashboard}></Route>
                </div>
                <Footer />
            </Router>
        </div >
    );
}

export default Panel;
