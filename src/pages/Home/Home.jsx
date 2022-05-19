import React, { useState, useEffect } from 'react';
import api from './../../services/api';
import {MdFlightTakeoff} from 'react-icons/md'
import './Home.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reserveActions } from '../../store/actions/reserveAction';

const Home = (props) => {


  const [trips, setTrips] = useState([])

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('trips')
      setTrips(response.data)
    }

    loadApi()

  }, [])


  return (
    <div>
        <div className='box'>
          {trips.map(trip => (
            <li key={trip.id}>
              <img src={trip.image} alt={trip.title} />
              <strong>{trip.title}</strong>
              <span>Status: {trip.status ? 'Disponivel': 'Indisponivel'}</span>
              <button
              type='button'
              onClick={() => props.addReserve(trip)}
              >
                <div>
                  <MdFlightTakeoff size={16} color="#fff" />
                </div>
                <span>SOLICITAR RESERVA</span>
              </button>
            </li>
          ))}
        </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators(reserveActions, dispatch)

export default connect(null,mapDispatchToProps)(Home)