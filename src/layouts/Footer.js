import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Switch>
      <Route path="/" exact render={(props) => (
        <p>Jesteś na:<span>stronie głównej</span></p>
      )
      } />
      <Route path="/project1" render={(props) => (
        <p>Jesteś na:<span>stronie z projektem nr 1 - Formularz z wysyłaniem wiadomości</span></p>
      )
      } />
      <Route path="/contact" render={(props) => (
        <p>Jesteś na:<span>stronie z kontaktem do mnie</span></p>
      )
      } />
      <Route path="/project2" render={(props) => (
        <p>Jesteś na:<span>stronie z projektem nr 2 - Aplikacja "Rzeczy do zrobienia"</span></p>
      )
      } />
      <Route path="/project3" render={(props) => (
        <p>Jesteś na:<span>stronie z projektem nr 3 - Losowanie przykładowych użytkowników ze strony</span></p>
      )
      } />
      <Route path="/project4" render={(props) => (
        <p>Jesteś na:<span>stronie z projektem nr 4 - Sklep internetowy</span></p>
      )
      } />
      <Route render={(props) => (
        <p>Przykro mi.<span>Nie ma takiej strony</span></p>
      )
      } />
      </Switch>


</div>
   ); 
}
 
export default Footer;