import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import api from '../../services/api/api';
import { MdFlightTakeoff } from 'react-icons/md'
import './Home.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reserveActions } from '../../store/actions/reserveAction';
import Loading from '../../components/Loading/Loading';

const Home = (props) => {

  const navigate = useNavigate()
  const [trips, setTrips] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    loadApi()
  }, [])

  async function loadApi() {
    const response = await api.get('trips')
    setTrips(response.data)
    setLoading(false)
  }

  return (
    <>
      {!loading ? (
        <div>
          <div className='box'>
            {trips.map(trip => (
              <li key={trip.id}>
                <img src={trip.image} alt={trip.title} />
                <strong>{trip.title}</strong>
                <span>Status: {trip.status ? 'Disponivel' : 'Indisponivel'}</span>
                <button
                  type='button'
                  onClick={() => {
                    props.addReserveRequest(trip.id)
                    navigate('/reserves')
                  }}

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
      ) :
        (
          <Loading />
        )}
    </>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators(reserveActions, dispatch)

export default connect(null, mapDispatchToProps)(Home)