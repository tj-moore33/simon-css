import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Login } from "./login/login";
import { Play } from "./play/play";
import { Scores } from "./scores/scores";
import { About } from "./about/about";

export default function App() {
    return (
        <BrowserRouter>
        <div className='app bg-dark text-light'>
            <header className="container-fluid">
                <nav className="navbar fixed-top navbar-dark">
                    <div className="navbar-brand" href="#">Simon<sup>&reg;</sup></div>
                    <menu className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='play'>Play</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to='scores'>Scores</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='about'>About</NavLink>
                        </li>
                    </menu>
                </nav>
            </header>

        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/play' element={<Play />} />
            <Route path='/scores' element={<Scores />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

            <footer className="bg-dark text-white-50">
                <div className="container-fluid">
                    <span className="text-reset">Teej wuz hur</span>
                    <a className="text-reset" href="https://github.com/webprogramming260/simon-css">Source</a>
                </div>
            </footer>
        </div>
        </BrowserRouter>
    );
}


function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknows.</main>;
}