import React from 'react';
import './Reserves.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reserveActions } from '../../store/actions/reserveAction';
import Loading from '../../components/Loading/Loading';
import ReservesBox from '../../components/ReservesBox/ReservesBox';

const Reserves = (props) => {
  return (
    <div>
      {!props.loading ? (
        <>
          <h1 className='title'>Voce solicitou {props.reserves.length} reservas</h1>
          <ReservesBox 
          reserves={props.reserves} 
          addReserveRequest={props.addReserveRequest}
          decreaseAmount={props.decreaseAmount}
          removeReserve={props.removeReserve}
          />
          <footer>
            <button type='button'>Solicitar Reservas</button>
          </footer>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators(reserveActions, dispatch)

const mapStateToProps = state => ({
  reserves: state.reserve.reserves,
  loading: state.reserve.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(Reserves)