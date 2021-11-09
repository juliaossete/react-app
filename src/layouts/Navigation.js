import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';


const list = [
    {name:'start', path:'/', exact:true},
    {name:'kontakt do mnie', path:'/contact'},
    {name:'Projekt 1', path:'/project1'},
    {name:'Projekt 2', path:'/project2'},
    {name:'Projekt 3', path:'/project3'},
    {name:'Projekt 4: SKLEP', path:'/project4'},

]

const Navigation = () => {
    const menu = list.map(item=>(
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact? item.exact:false}>{item.name}</NavLink>
            </li>
    ))
    return ( 
        <nav className='main'>
           <ul>
            {menu}
           </ul>
        </nav>
     );
}
 
export default Navigation;