import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './Footer';
import Page from './Page';
import Header from './Header';
import Navigation from './Navigation';

class App extends Component {
    render (){
        return (
            <Router basename={process.env.PUBLIC_URL}>
            <div className='app'>
               <header>
                   {<Header/>}
               </header>
               <main>
                   <aside>
                        {<Navigation/>}
                   </aside>
                   <section className='Page'>
                       {<Page/>}
                   </section>
               </main>
               <footer>
                   {<Footer/>}
               </footer>
            </div>
            </Router>
        )
    }
}

export default App;