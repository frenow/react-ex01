import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export const NavBarComponent = () => (
    <>
    <ul className="navbarhor">
    <li className="navbarhor">
        <a className="navbarhor" href="/">Inicio</a>
    </li>
    <li className="navbarhor">
    <a className="navbarhor" href="/Sobre">Sobre</a>
    </li>
    <li className="navbarhor">
    <a className="navbarhor" href="/Contato">Contato</a>
    </li>    
    </ul>
    </>
)

