import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg'
import './Header.css'

export default function Header() {
 return (
   <header className='container'>
        <Link to='/'>
            <img className='Logo' src={Logo} alt="Logo" />
        </Link>

        <Link to='/reserves' className='reserve'>
            <div>
                <strong>Minhas reservas</strong>
                <span>0 reservas</span>
            </div>
        </Link>
   </header>
 );
}