import React from 'react';
import {Route, Switch} from 'react-router-dom';
import "../styles/Header.css";
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';

const Header = () => {
    return ( 
        <> 
        <Switch>
            <Route path="/" exact render={()=>(
                <img src={img1} exact='true' alt='img'/>
            )}/>
            <Route path="/contact" render={()=>(
                <img src={img2} alt='img'/>
            )}/>
             <Route path="/project1" render={()=>(
                <img src={img3} alt='img'/>
            )}/>
            <Route path="/project2" render={()=>(
                <img src={img4} alt='img'/>
            )}/>
            <Route path="/project3" render={()=>(
                <img src={img5} alt='img'/>
            )}/>
            <Route path="/project4" render={()=>(
                <img src={img6} alt='img'/>
            )}/>
            <Route render={()=>(
                <img src={img7} exact='true' alt='img'/> //strona, która nie istnieje
            )}/>
            </Switch>
        </>
     );
}
 
export default Header;