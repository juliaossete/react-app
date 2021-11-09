import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import Project1Page from '../pages/Project1Page';
import Project2Page from '../pages/Project2Page';
import Project3Page from '../pages/Project3Page';
import Project4Page from '../pages/Project4Page';
import BadWayPage from '../pages/BadWayPage';

const Page = () => {
    return ( 
        <> 
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/project1" component={Project1Page}/>
                <Route path="/project2" component={Project2Page}/>
                <Route path="/project3" component={Project3Page}/>
                <Route path="/project4" component={Project4Page}/>
                <Route component={BadWayPage}/>            
            </Switch>
        </>
     );
}
 
export default Page;