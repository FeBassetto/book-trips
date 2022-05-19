import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg'
import './Header.css'
import { connect } from 'react-redux';

const Header = (props) => {
 return (
   <header className='container'>
        <Link to='/'>
            <img className='Logo' src={Logo} alt="Logo" />
        </Link>

        <Link to='/reserves' className='reserve'>
            <div>
                <strong>Minhas reservas</strong>
                <span>{props.reserves.length} reservas</span>
            </div>
        </Link>
   </header>
 );
}

const mapStateToProps = state => ({
    reserves: state.reserve.reserves
  })

export default connect(mapStateToProps,null)(Header)