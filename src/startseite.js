import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Startseite(){

    return(
        <div class="marstart">
            <img class="background" src="./pics/todo2.jpg" alt="hoi"/>
            <div>
                <button class="btn-primary" size="large"><Link to="/Liste" class="btn-primary"></Link>Liste</button>
                <button class="btn-primary" size="large"><Link to="/Person" class="btn-primary"></Link>Person</button>
            </div>
        </div>
    );
}


