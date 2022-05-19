import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg'
import './Header.css'
import { connect } from 'react-redux';
import { getReservesTotal } from '../../store/reducer/reserveReducer';

const Header = (props) => {
 return (
   <header className='container'>
        <Link to='/'>
            <img className='Logo' src={Logo} alt="Logo" />
        </Link>

        <Link to='/reserves' className='reserve'>
            <div>
                <strong>Minhas reservas</strong>
                <span>{props.total} reservas</span>
            </div>
        </Link>
   </header>
 );
}

const mapStateToProps = state => ({
    total: getReservesTotal(state)
  })

export default connect(mapStateToProps,null)(Header)